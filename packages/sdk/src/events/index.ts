import { Events } from "../events";
import {
  EmployeeCreatedEventData,
  EmployeeDeletedEventData,
  EmployeeOpenedEventData,
  EmployeeTerminatedEventData,
  EmployeeUpdatedEventData,
} from "./employee";
import {
  ComponentClosedEventData,
  ComponentReadyEventData,
  ComponentResizeEventData,
  SessionExpiredEventData,
} from "./general";
import {
  PayrunCreatedEventData,
  PayrunFiledEventData,
  PayrunOpenedEventData,
  PayrunPublishedEventData,
  PayrunUpdatedEventData,
} from "./payrun";
import { ReportGeneratedEventData } from "./report";

export type EventSchemaMap = {
  [Events.COMPONENT_READY]: ComponentReadyEventData;
  [Events.COMPONENT_CLOSED]: ComponentClosedEventData;
  [Events.COMPONENT_RESIZE]: ComponentResizeEventData;
  [Events.SESSION_EXPIRED]: SessionExpiredEventData;

  [Events.PAYRUN_CREATED]: PayrunCreatedEventData;
  [Events.PAYRUN_UPDATED]: PayrunUpdatedEventData;
  [Events.PAYRUN_PUBLISHED]: PayrunPublishedEventData;
  [Events.PAYRUN_FILED]: PayrunFiledEventData;
  [Events.PAYRUN_OPENED]: PayrunOpenedEventData;

  [Events.EMPLOYEE_CREATED]: EmployeeCreatedEventData;
  [Events.EMPLOYEE_UPDATED]: EmployeeUpdatedEventData;
  [Events.EMPLOYEE_DELETED]: EmployeeDeletedEventData;
  [Events.EMPLOYEE_TERMINATED]: EmployeeTerminatedEventData;
  [Events.EMPLOYEE_OPENED]: EmployeeOpenedEventData;

  [Events.REPORT_GENERATED]: ReportGeneratedEventData;
};
