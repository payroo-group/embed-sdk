export enum Components {
  PAYRUN_LIST = "list_payruns",
  VIEW_PAYRUN = "view_payrun",
  FILE_PAYRUN = "view_payrun",
  CREATE_PAYRUN = "create_payrun",
  EMPLOYEE_LIST = "list_employees",
  VIEW_EMPLOYEE = "view_employee",
  VIEW_REPORT = "view_report",
  PAYROLL_SETTINGS = "payroll_settings",
}

export type ListPayrunsOptions = {
  /**
   * If true, displays a summary of the payrun statistics at the top of the payrun list.
   */
  showStatSummary?: boolean;
  /**
   * Whether to display a button for creating a new payrun in the list UI.
   * @default false
   */
  showCreateButton?: boolean;

  /**
   * If true, clicking a payrun opens it in the current window; otherwise, it may open in a new tab or modal.
   * @default false
   */
  viewPayrun?: boolean;

  /**
   * If true, displays a filter bar allowing users to filter payruns by status, schedule, and date range.
   * If false, filtering can be controlled via the `status`, `schedule`, `startDate`, and `endDate` properties.
   * @default false
   */
  showFilter?: boolean;

  /**
   * Filters the payrun list by schedule type.
   * Accepted values: "Weekly", "Fortnightly", "Monthly", "Quarterly", "Unscheduled".
   */
  schedule?: "Weekly" | "Fortnightly" | "Monthly" | "Quarterly" | "Unscheduled";

  /**
   * Filters the payrun list by status.
   * Accepted values: "Filed", "Published", "Unpublished", "Failed", "Paid".
   */
  status?: "Filed" | "Published" | "Unpublished" | "Failed" | "Paid";

  /**
   * Filters payruns to those with a start date on or after this date (inclusive).
   * Format: "YYYY-MM-DD" (e.g., "2021-07-01").
   */
  startDate?: string;

  /**
   * Filters payruns to those with an end date on or before this date (inclusive).
   * Format: "YYYY-MM-DD" (e.g., "2022-06-30").
   */
  endDate?: string;
};

export type ViewPayrunOptions = {
  /**
   * The unique identifier of the payrun to view.
   * This is required to fetch and display the specific payrun details.
   */
  id: string;

  /**
   * If true, allows the user to file the payrun.
   * @default false
   */
  allowFile?: boolean;

  /**
   * If true, allows the user to edit the payrun.
   * @default false
   */
  allowEdit?: boolean;
};

export type ComponentSchemaMap = {
  [Components.PAYRUN_LIST]: ListPayrunsOptions;
  [Components.VIEW_PAYRUN]: ViewPayrunOptions;
  [Components.FILE_PAYRUN]: ViewPayrunOptions;
  [Components.CREATE_PAYRUN]: Record<string, string>;
  [Components.EMPLOYEE_LIST]: Record<string, string>;
  [Components.VIEW_EMPLOYEE]: Record<string, string>;
  [Components.VIEW_REPORT]: Record<string, string>;
  [Components.PAYROLL_SETTINGS]: Record<string, string>;
};
