// ------------------- Client Side Filters Values ------------------------------

export const EmployeeDetails = [
  {
    accessorFn: (row: any) => row.employeeId,
    id: "Employee ID",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat"> Employee ID</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.employeeName,
    id: "Employee Name",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat"> Employee Name</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.department,
    id: "Department",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Department</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.phone,
    id: "Phone Number",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Phone Number</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "Type",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Type</span>,
    enableSorting: false,
  },
  // {
  //   accessorFn: (row: any) => row.status,
  //   id: "Status",
  //   cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
  //   header: () => <span className="textFormat">Status</span>,
  //   enableSorting: false,
  // },
  {
    accessorFn: (row: any) => row.rm,
    id: "RM",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">RM</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.pm,
    id: "PM",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">PM</span>,
    enableSorting: false,
  },
];

export const HardwareDetails = [
  {
    accessorFn: (row: any) => row.hardwareId,
    id: "Hardware ID",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Hardware ID</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.hardwareName,
    id: "Hardware Name",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Hardware Name</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.svNo,
    id: "SN Number",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">SN Number</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "Status",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Status</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) =>
      row.employeesWithAccess.length
        ? row.employeesWithAccess[0].employeeName
        : "-",
    id: "Assignee",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Assignee</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "Type",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Type</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.condition,
    id: "Condition",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Condition</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.notes,
    id: "Other Assets",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Other Assets</span>,
    enableSorting: false,
  },
];

export const SoftwareDetails = [
  {
    accessorFn: (row: any) => row.softwareId,
    id: "Software ID",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Software ID</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.softwareName,
    id: "Software Name",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Software Name</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.userName,
    id: "User Name",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">User Name</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.password,
    id: "Password",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Password</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "Status",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Status</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) =>
      row.employeesWithAccess.length
        ? row.employeesWithAccess[0].employeeName
        : "-",
    id: "Assignee",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Assignee</span>,
    enableSorting: false,
  },
  {
    accessorFn: (row: any) => row.notes,
    id: "Other Assets",
    cell: (info: any) => (info.getValue() ? info.getValue() : "-"),
    header: () => <span className="textFormat">Other Assets</span>,
    enableSorting: false,
  },
];

// ------------------- Server Side Filters Values ------------------------------

export const employeeFilterValues: any = {
  "Employee ID": "employeeId",
  "Employee Name": "employeeName",
  Department: "department",
  "Phone Number": "phone",
  Type: "type",
  RM: "rm",
  PM: "pm",
};

export const hardwareFilterValues = {
  "Hardware ID": "hardwareId",
  "Hardware Name": "hardwareName",
  "SN Number": "svNo",
  Status: "status",
  Type: "type",
  Condition: "condition",
  "Other Assets": "notes",
};

export const softwareFilterValues = {
  "Software ID": "softwareId",
  "Software Name": "softwareName",
  "User Name": "userName",
  Password: "password",
  Status: "status",
  "Other Assets": "notes",
};
