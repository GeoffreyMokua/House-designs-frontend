import Header from "@/components/surfaces/Header";
import HotelIcon from "@mui/icons-material/Hotel";
import Snackbar from "@mui/material/Snackbar";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "@/components/surfaces/Footer";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Stack, TextField, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChatIcon from "@mui/icons-material/Chat";
import { Card, CardHeader, CardActions, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Carousel from "react-material-ui-carousel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const contactSchema = yup.object({
  name: yup.string().required("Full names are required"),
  email: yup.string().email().trim().required("Email is required"),
  subject: yup.string().trim().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
type Contact = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SingleDesign: React.FC<{ design: any }> = ({ design }) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: any = (data: any) => {
    fetch("https://smart-designs-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        setOpen1(true);
        reset();
      });
  };
  const handleClose1 = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  return (
    <Stack>
      <Header />
      <Stack sx={{ minHeight: "100vh", width: "100%", flexGrow: 1 }}>
        <Stack
          sx={{
            width: "100%",
            backgroundColor: "secondary.dark",
            marginTop: "90px",
            height: "40px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "10%",
            gap: 1,
          }}>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ color: "secondary.light" }}>
            Home
          </Typography>
          <KeyboardDoubleArrowRightIcon sx={{ color: "secondary.light" }} />
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ color: "secondary.light" }}>
            Designs
          </Typography>
          <KeyboardDoubleArrowRightIcon sx={{ color: "secondary.light" }} />
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ color: "secondary.light" }}>
            {design.property_name} {design.property_type}
          </Typography>
        </Stack>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "20px", marginLeft: "20px" }}>
          {" "}
          {design.property_name} {design.property_type}
        </Typography>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            height: "70%",
            "@media (max-width: 600px)": {
              display: "grid",
              gridTemplateColumns: "1fr",
            },
          }}>
          <Stack>
            <Carousel
              sx={{
                height: "100%",
                width: "90%",
                marginTop: "10px",
                marginBottom: "auto",
                marginRight: "auto",
                marginLeft: "auto",
              }}>
              {[
                design.image1,
                design.image2,
                design.image13,
                design.image4,
                design.image5,
              ].map((image: any) => (
                <Stack
                  key={design}
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // Set the stack height to match the Carousel container
                  }}>
                  <Image
                    style={{
                      width: "100%",
                      height: "500px", // Set the image height to fill the Stack container
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={image}
                    width={300} // Adjust the width value based on your requirements
                    height={400} // Adjust the height value based on your requirements
                    alt={image}
                  />
                </Stack>
              ))}
            </Carousel>
            <Stack
              sx={{
                width: "60%",
                display: "grid",
                padding: "10px",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
              <Stack
                gap={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  padding: "10px",
                }}>
                <HotelIcon />
                <Typography>{design.no_of_bedrooms} Bedrooms</Typography>
              </Stack>
              <Stack
                gap={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  padding: "10px",
                }}>
                <BathtubIcon />
                <Typography>{design.no_of_bathrooms} Bedrooms</Typography>
              </Stack>
              <Stack
                gap={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  padding: "10px",
                }}>
                <SquareFootIcon />
                <Typography>{design.property_size}</Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{ width: "100%", justifyContent: "center", padding: "20px" }}
              direction="row"
              gap={3}>
              <Typography variant="subtitle2" align="center">
                Plinth area: {design.plinth_area}
              </Typography>
              {/* <Typography align="center" variant="h5">
                {design.class_of_finishes}
              </Typography> */}
            </Stack>
          </Stack>
          <Stack sx={{ justifyContent: "space-around" }}>
            <Stack sx={{ alignItems: "center" }} gap={2} direction="column">
              <LocationOnIcon sx={{ fontSize: "50px" }} />
              <Typography variant="subtitle1">
                {" "}
                {design.location}, {design.county}
              </Typography>
            </Stack>
            <Card
              sx={{ marginRight: "auto", marginLeft: "auto", width: "90%" }}>
              <CardHeader
                title={
                  <Typography
                    align="center"
                    sx={{ color: "secondary.light" }}
                    variant="subtitle1">
                    Features
                  </Typography>
                }
                sx={{ backgroundColor: "primary.dark" }}
              />
              <CardContent>
                {[
                  design.feature1,
                  design.feature2,
                  design.feature3,
                  design.feature4,
                  design.feature5,
                ].map((feature, i) => (
                  <Stack key={i} direction="row" gap={3}>
                    <CheckCircleOutlineIcon />
                    <Typography variant="h6">{feature}</Typography>
                  </Stack>
                ))}
                <Stack
                  sx={{
                    width: "100%",
                    padding: "20px",
                    border: "1px solid",
                    marginTop: "10px",
                  }}
                  gap={3}>
                  <Typography variant="subtitle1">Build Cost</Typography>
                  <Typography variant="h5">{design.total_price}</Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Stack sx={{ width: "100%" }}>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    size="large"
                    onClick={handleClickOpen}
                    endIcon={<ChatIcon />}>
                    Email Admin
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Stack>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle>
              {"Send a message to the admin conserning the design"}
            </DialogTitle>
            <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
              <DialogContent>
                <Stack sx={{ padding: "20px" }} gap={3}>
                  <TextField
                    {...register("name")}
                    label="Enter Your full names *"></TextField>
                  <TextField
                    {...register("email")}
                    label="Enter valid email address *"></TextField>
                  <TextField
                    {...register("subject")}
                    value={`${design.property_name} ${design.property_type}`}
                    label="Subject"></TextField>
                  <TextField
                    {...register("message")}
                    multiline
                    rows={4}
                    label="message"></TextField>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button
                  type="submit"
                  size="medium"
                  variant="contained"
                  onClick={handleClose}>
                  send
                </Button>
                <Button onClick={handleClose}>back</Button>
              </DialogActions>
            </Stack>
          </Dialog>
        </Stack>
      </Stack>
      <Snackbar
        open={open1}
        autoHideDuration={2000}
        onClose={handleClose1}
        message="Message sent"
      />
      <Footer />
    </Stack>
  );
};

export default SingleDesign;
