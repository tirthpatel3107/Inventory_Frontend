export const Employee = {
  CREATE_EMPLOYEE: "/employee/new",
  GET_ALL_EMPLOYEES: "/employee/all",
  GET_SINGLE_EMPLOYEE: "/employee/get",
  UPDATE_EMPLOYEE: "/employee/update",
  DELETE_EMPLOYEE: "/employee/remove",
  GET_EMPLOYEE_LIST: "/employee/list",
  GET_EMPLOYEE_LIST_BY_ID: "/employee/list",
  GET_EMPLOYEE_DASHBOARD: "/employee/dashboard",
};

export const Hardware = {
  CREATE_HARDWARE: "/hardware/new",
  GET_ALL_HARDWARES: "/hardware/all",
  GET_SINGLE_HARDWARE: "/hardware/get",
  UPDATE_HARDWARE: "/hardware/update",
  DELETE_HARDWARE: "/hardware/remove",
  UPDATE_HARDWARE_ASSIGN: "/hardware/assign",
  UPDATE_HARDWARE_UNASSIGN: "/hardware/unassign",
  GET_ALL_UNASSIGN_HARDWARES: "/hardware/unassign/all",
  GET_HARDWARE_DASHBOARD: "/hardware/dashboard",
};

export const Software = {
  CREATE_SOFTWARE: "/software/new",
  GET_ALL_SOFTWARES: "/software/all",
  GET_SINGLE_SOFTWARE: "/software/get",
  UPDATE_SOFTWARE: "/software/update",
  DELETE_SOFTWARE: "/software/remove",
  UPDATE_SOFTWARE_ASSIGN: "/software/assign",
  UPDATE_SOFTWARE_UNASSIGN: "/software/unassign",
  GET_ALL_UNASSIGN_SOFTWARES: "/software/unassign/all",
};

export const Auth = {
  LOGIN: "/auth/login",
};

export const FrontRoute = {
  LOGIN: "/~yoelteam/mt_inventory/",
  DASHBOARD: "/~yoelteam/mt_inventory/dashboard",
  EMPLOYEE: "/~yoelteam/mt_inventory/employee",
  HARDWARE: "/~yoelteam/mt_inventory/hardware",
  SOFTWARE: "/~yoelteam/mt_inventory/software",
};
