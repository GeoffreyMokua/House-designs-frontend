import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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

interface IDeleteModal {
  isModalOpen: boolean | null;
  loading: boolean;
  handleClose: (data: any) => void;
  handleCancel: () => void;
}
const DeleteModal: React.FC<IDeleteModal> = ({
  isModalOpen,
  loading,
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
        <DialogTitle>{"Delete Design"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Stack>
              <Typography>
                Are you sure you want to delete {"design"}
              </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => handleClose(isModalOpen)}>
            {loading && (
              <CircularProgress sx={{ height: "15px", width: "15px" }} />
            )}
            <Typography color="red">Delete</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
