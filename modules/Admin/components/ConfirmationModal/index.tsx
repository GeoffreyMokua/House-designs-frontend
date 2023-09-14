import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IConfirmationModal {
  isModalOpen: boolean | null;
  handleClose: (data: any) => void;
  handleCancel: () => void;
}
const ConfirmationModal: React.FC<IConfirmationModal> = ({
  isModalOpen,
  handleClose,
  handleCancel,
}) => {
  return (
    <div>
      <Dialog
        open={isModalOpen !== null}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancel}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"You are about to create a new design"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure yo want to create this Design?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => handleClose(isModalOpen)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
