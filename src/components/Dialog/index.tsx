import { useContext } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

// Component
import ViewEmployee from "../Employee/ViewEmployee";
import AddEmployee from "../Employee/AddEmployee";
import EditEmployee from "../Employee/EditEmployee";

import ViewHardware from "../Hardware/ViewHardware";
import AddHardware from "../Hardware/AddHardware";
import EditHardware from "../Hardware/EditHardware";

import ViewSoftware from "../Software/ViewSoftware";
import AddSoftware from "../Software/AddSoftware";
import EditSoftware from "../Software/EditSoftware";

// Context
import { DataContext } from "../../hooks/context/DataProvider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AlertDialog = () => {
  // Getting Data from Use Context
  const { open, setOpen, dailogBoxName }: any = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="abcd"
      >
        {dailogBoxName === "Viewemployee" && <ViewEmployee />}
        {dailogBoxName === "Addemployee" && <AddEmployee />}
        {dailogBoxName === "Editemployee" && <EditEmployee />}

        {dailogBoxName === "Viewhardware" && <ViewHardware />}
        {dailogBoxName === "Addhardware" && <AddHardware />}
        {dailogBoxName === "Edithardware" && <EditHardware />}

        {dailogBoxName === "Viewsoftware" && <ViewSoftware />}
        {dailogBoxName === "Addsoftware" && <AddSoftware />}
        {dailogBoxName === "Editsoftware" && <EditSoftware />}
      </BootstrapDialog>
    </Dialog>
  );
};

export default AlertDialog;
