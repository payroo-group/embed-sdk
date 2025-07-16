import { Events } from "../events";

export type EmployeeCreatedEventData = {
  version: "v1";
  type: Events.EMPLOYEE_CREATED;
  employeeId: string;
};

export type EmployeeUpdatedEventData = {
  version: "v1";
  type: Events.EMPLOYEE_UPDATED;
  employeeId: string;
};

export type EmployeeDeletedEventData = {
  version: "v1";
  type: Events.EMPLOYEE_DELETED;
  employeeId: string;
};

export type EmployeeTerminatedEventData = {
  version: "v1";
  type: Events.EMPLOYEE_TERMINATED;
  employeeId: string;
};

export type EmployeeOpenedEventData = {
  version: "v1";
  type: Events.EMPLOYEE_OPENED;
  employeeId: string;
};
