import { Events } from "../events";

export type PayrunCreatedEventData = {
  version: "v1";
  type: Events.PAYRUN_CREATED;
  payrunId: string;
};

export type PayrunUpdatedEventData = {
  version: "v1";
  type: Events.PAYRUN_UPDATED;
  payrunId: string;
};

export type PayrunPublishedEventData = {
  version: "v1";
  type: Events.PAYRUN_PUBLISHED;
  payrunId: string;
};

export type PayrunFiledEventData = {
  version: "v1";
  type: Events.PAYRUN_FILED;
  payrunId: string;
};

export type PayrunOpenedEventData = {
  version: "v1";
  type: Events.PAYRUN_OPENED;
  payrunId: string;
};
