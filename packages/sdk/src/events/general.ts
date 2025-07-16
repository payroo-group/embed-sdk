import { Events } from "../events";

export type ComponentReadyEventData = {
  version: "v1";
  type: Events.COMPONENT_READY;
};

export type ComponentClosedEventData = {
  version: "v1";
  type: Events.COMPONENT_CLOSED;
};

export type ComponentResizeEventData = {
  version: "v1";
  type: Events.COMPONENT_RESIZE;
  bounds: {
    width: number;
    height: number;
  };
};

export type SessionExpiredEventData = {
  version: "v1";
  type: Events.SESSION_EXPIRED;
};
