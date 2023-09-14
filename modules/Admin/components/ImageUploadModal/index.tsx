import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
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

interface IImageUploadModal {
  isModalOpen: boolean | null;
  loading: boolean;
  handleClose: (data: any, file: any) => void;
  handleCancel: () => void;
}
const ImageUploadModal: React.FC<IImageUploadModal> = ({
  isModalOpen,
  handleClose,
  loading,
  handleCancel,
}) => {
  const [file, setFile] = React.useState<any>(null);
  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };
  return (
    <div>
      <Dialog
        open={isModalOpen !== null}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancel}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Upload new image"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Stack>
              <Typography>Add images here</Typography>
              <TextField type="file" onChange={handleChange} />
              <Typography>selected images</Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            disabled={file === null}
            onClick={() => handleClose(isModalOpen, file)}>
            {loading && (
              <CircularProgress sx={{ height: "15px", width: "15px" }} />
            )}
            <Typography>Upload</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageUploadModal;
