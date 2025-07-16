import { Events } from "../events";

export type ReportGeneratedEventData = {
  version: "v1";
  type: Events.REPORT_GENERATED;
  reportId: string;
};
