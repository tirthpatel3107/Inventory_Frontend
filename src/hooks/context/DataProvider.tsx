import React, { createContext, useState } from "react";

export const DataContext = createContext<{
  open: Boolean;
  setOpen: (value: any) => void;
  dailogBoxName: String;
  setDailogBoxName: (value: string) => void;

  id: String;
  setId: (value: string) => void;

  employeeTableReload: Boolean;
  setEmployeeTableReload: (value: any) => void;
  hardwareTableReload: Boolean;
  setHardwareTableReload: (value: any) => void;
  softwareTableReload: Boolean;
  setSoftwareTableReload: (value: any) => void;

  employeePopupTableReload: Boolean;
  setEmployeePopupTableReload: (value: any) => void;
  hardwarePopupTableReload: Boolean;
  setHardwarePopupTableReload: (value: any) => void;
  softwarePopupTableReload: Boolean;
  setSoftwarePopupTableReload: (value: any) => void;

  empQuery: Object;
  setEmpQuery: (value: any) => void;
  hardwareQuery: Object;
  setHardwareQuery: (value: any) => void;
  softwareQuery: Object;
  setSoftwareQuery: (value: any) => void;
} | null>(null);

const DataProvider = ({ children }: any) => {
  // For Dialog Purpose
  const [open, setOpen] = useState(false);
  const [dailogBoxName, setDailogBoxName] = useState("");

  // For store and access particular ID
  const [id, setId] = useState("");

  // For Global Table Reloading Purpose
  const [employeeTableReload, setEmployeeTableReload] = useState(false);
  const [hardwareTableReload, setHardwareTableReload] = useState(false);
  const [softwareTableReload, setSoftwareTableReload] = useState(false);

  // For Popup Table Reloading Purpose
  const [employeePopupTableReload, setEmployeePopupTableReload] =
    useState(false);
  const [hardwarePopupTableReload, setHardwarePopupTableReload] =
    useState(false);
  const [softwarePopupTableReload, setSoftwarePopupTableReload] =
    useState(false);

  // To Add Query Inside Global Tables API
  const [empQuery, setEmpQuery] = useState({});
  const [hardwareQuery, setHardwareQuery] = useState({});
  const [softwareQuery, setSoftwareQuery] = useState({});

  return (
    <React.Fragment>
      <DataContext.Provider
        value={{
          open,
          setOpen,
          dailogBoxName,
          setDailogBoxName,

          id,
          setId,

          employeeTableReload,
          setEmployeeTableReload,
          hardwareTableReload,
          setHardwareTableReload,
          softwareTableReload,
          setSoftwareTableReload,

          employeePopupTableReload,
          setEmployeePopupTableReload,
          hardwarePopupTableReload,
          setHardwarePopupTableReload,
          softwarePopupTableReload,
          setSoftwarePopupTableReload,

          empQuery,
          setEmpQuery,
          hardwareQuery,
          setHardwareQuery,
          softwareQuery,
          setSoftwareQuery,
        }}
      >
        {children}
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default DataProvider;
