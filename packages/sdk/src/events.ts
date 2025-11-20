export enum Events {
  // General events
  COMPONENT_READY = "embed.ready",
  COMPONENT_CLOSED = "embed.closed",
  COMPONENT_RESIZE = "layout.resize",
  SESSION_EXPIRED = "session.expired",

  // Payrun events
  PAYRUN_CREATED = "payrun.created",
  PAYRUN_UPDATED = "payrun.updated",
  PAYRUN_PUBLISHED = "payrun.published",
  PAYRUN_FILED = "payrun.filed",
  PAYRUN_OPENED = "payrun.opened",

  // Employee events
  EMPLOYEE_CREATED = "employee.created",
  EMPLOYEE_UPDATED = "employee.updated",
  EMPLOYEE_DELETED = "employee.deleted",
  EMPLOYEE_TERMINATED = "employee.viewed",
  EMPLOYEE_OPENED = "employee.opened",

  // Report events
  REPORT_GENERATED = "report.generated",
}

