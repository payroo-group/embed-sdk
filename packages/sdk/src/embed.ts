import EventEmitter from "eventemitter3";
import { Events } from "./events";
import { EventSchemaMap } from "./events/index";

export type Options = {
  /**
   * Additional origins that are allowed to send messages to the iframe.
   * This is useful for whitelisting specific domains that you trust.
   */
  extraAllowedOrigins?: string[];
  /**
   * Automatically adjust the iframe height based on the content.
   * Default is true.
   */
  autoHeightAdjust?: boolean;
};

const defaultOptions: Options = {
  extraAllowedOrigins: [],
  autoHeightAdjust: true,
};

const trustedOrigins = ["https://embed.payroo.com.au"];

export class Embed {
  private iframe: HTMLIFrameElement;
  private eventBus: EventEmitter;
  private allowedOrigins: string[] = trustedOrigins;

  constructor(url: string, options: Options = defaultOptions) {
    // Configure messaging
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
    this.eventBus = new EventEmitter();
    if (options.extraAllowedOrigins?.length) {
      this.allowedOrigins = this.allowedOrigins.concat(
        options.extraAllowedOrigins,
      );
    }
    if (options.autoHeightAdjust) {
      this.eventBus.on(Events.COMPONENT_RESIZE, (data) => {
        this.iframe.height = `${data.bounds.height}px`;
      });
    }

    window.addEventListener("message", this.onMessage);

    // Configure the iframe
    this.iframe = window.document.createElement("iframe");
    this.iframe.src = url;
    this.iframe.width = "100%";
    this.iframe.height = "0";
  }

  public mount(target: HTMLElement): void {
    if (!target) {
      throw new Error("Target element is required to mount the iframe.");
    }
    target.appendChild(this.iframe);
  }
  public unmount(): void {
    if (this.iframe.parentNode) {
      this.iframe.parentNode.removeChild(this.iframe);
    }
    window.removeEventListener("message", this.onMessage);
    this.eventBus.removeAllListeners();
  }

  public on<K extends Events>(
    event: string,
    listener: (data: EventSchemaMap[K]) => void,
  ): void {
    this.eventBus.on(event, listener);
  }

  public off<K extends Events>(
    event: string,
    listener: (data: EventSchemaMap[K]) => void,
  ): void {
    this.eventBus.off(event, listener);
  }

  private isOriginAllowed(origin: string): boolean {
    return this.allowedOrigins.includes(origin);
  }

  private onMessage = (event: MessageEvent): void => {
    console.info("Received message:", event);
    const origin = event.origin;
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns
    if (!this.isOriginAllowed(origin)) {
      console.warn(`Message from disallowed origin: ${origin}`);
      return;
    }

    console.info(`Received message from ${origin}:`, event.data);

    // Emit supported events only
    switch (event.data.type) {
      case Events.COMPONENT_READY:
      case Events.COMPONENT_CLOSED:
      case Events.COMPONENT_RESIZE:
      case Events.SESSION_EXPIRED:
      case Events.PAYRUN_CREATED:
      case Events.PAYRUN_UPDATED:
      case Events.PAYRUN_PUBLISHED:
      case Events.PAYRUN_FILED:
      case Events.PAYRUN_OPENED:
      case Events.EMPLOYEE_CREATED:
      case Events.EMPLOYEE_UPDATED:
      case Events.EMPLOYEE_DELETED:
      case Events.EMPLOYEE_TERMINATED:
      case Events.EMPLOYEE_OPENED:
      case Events.REPORT_GENERATED: {
        this.eventBus.emit(event.data.type, event.data);
        break;
      }
      default: {
        console.warn(`Unsupported message type: ${event.data.type}`);
      }
    }
  };
}
