export enum Components {
  PAYRUN_LIST = "list_payruns",
  VIEW_PAYRUN = "view_payrun",
  FILE_PAYRUN = "file_payrun",
  CREATE_PAYRUN = "create_payrun",
  EMPLOYEE_LIST = "list_employees",
  VIEW_EMPLOYEE = "view_employee",
  CREATE_EMPLOYEE = "create_employee",
  ONBOARD_EMPLOYEE = "onboard_employee",
  VIEW_REPORT = "view_report",
  PAYROLL_SETTINGS = "payroll_settings",
  HOLIDAYS_SETTINGS = "holidays_settings",
  PAYSLIPS_SETTINGS = "payslips_settings",
  ATO_SETTINGS = "ato_settings",
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

export type FilePayrunOptions = {
  /**
   * The unique identifier of the payrun to view.
   * This is required to fetch and display the specific payrun details.
   */
  id: string;

  /**
   * If true, allows the user to edit the payrun before filing.
   * This setting will allow the user to move the payrun to unpublished state
   * @default false
   */
  allowEdit?: boolean;
};

export type CreatePayrunOptions = {
  /**
   * Callback when a payrun is successfully created.
   */
  onSuccess?: (payrunId: string) => void;
};

export type EmployeeListOptions = {
  /**
   * If true, shows a filter bar for employees.
   */
  showFilter?: boolean;
  /**
   * Pre-filter employees by status.
   */
  status?: "Active" | "Inactive" | "Terminated";
};

export type ViewEmployeeOptions = {
  /**
   * The unique identifier of the employee to view.
   */
  id: string;
};

export type CreateEmployeeOptions = {
  /**
   * Callback when an employee is successfully created.
   */
  onSuccess?: (employeeId: string) => void;
};

export type OnboardEmployeeOptions = {
  /**
   * The unique identifier of the employee to onboard.
   */
  id: string;
};

export type ViewReportOptions = {
  /**
   * The report type to view.
   */
  reportType: 'summary' | 'super' | 'leaves' | 'finalisations' | 'variance';
  /**
   * Optional date range for the report.
   */
  startDate?: string;
  endDate?: string;
};

export type PayrollSettingsOptions = {
  /**
   * If true, allows editing payroll settings.
   */
  allowEdit?: boolean;
};

export type HolidaysSettingsOptions = {
  /**
   * If true, allows editing holiday settings.
   */
  allowEdit?: boolean;
};

export type PayslipsSettingsOptions = {
  /**
   * If true, allows editing payslip settings.
   */
  allowEdit?: boolean;
};

export type ComponentSchemaMap = {
  [Components.PAYRUN_LIST]: ListPayrunsOptions;
  [Components.VIEW_PAYRUN]: ViewPayrunOptions;
  [Components.FILE_PAYRUN]: FilePayrunOptions;
  [Components.CREATE_PAYRUN]: CreatePayrunOptions;
  [Components.EMPLOYEE_LIST]: EmployeeListOptions;
  [Components.VIEW_EMPLOYEE]: ViewEmployeeOptions;
  [Components.CREATE_EMPLOYEE]: CreateEmployeeOptions;
  [Components.ONBOARD_EMPLOYEE]: OnboardEmployeeOptions;
  [Components.VIEW_REPORT]: ViewReportOptions;
  [Components.PAYROLL_SETTINGS]: PayrollSettingsOptions;
  [Components.HOLIDAYS_SETTINGS]: HolidaysSettingsOptions;
  [Components.PAYSLIPS_SETTINGS]: PayslipsSettingsOptions;
};
