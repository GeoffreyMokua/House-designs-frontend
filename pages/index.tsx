import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";

import Header from "@/components/surfaces/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Footer from "../components/surfaces/Footer";
import contact from "../public/contacts.jpeg";
import graduation from "../public/graduationhat.jpeg";
import home from "../public/home.png";
import machinery from "../public/machinery.jpeg";
import person1 from "../public/person1.jpeg";
import person2 from "../public/person2.jpeg";
import styles from "./styles.module.css";

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

export const getStaticProps = async () => {
  const res = await fetch(
    "https://house-designs-node-backend.onrender.com/designs"
  );
  const data = await res.json();
  return {
    props: { designs: data.data },
  };
};

const App: React.FC<{ designs: any }> = ({ designs }) => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: any = (data: any) => {
    fetch("https://house-designs-node-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        setOpen(true);
        reset();
      });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "secondary.light",
      }}>
      <Header />
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "rgba(225, 235, 237, 0.5)",
          marginTop: "15px",
          display: "grid",

          gridTemplateColumns: "1fr",
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "1fr",
            padding: "5px",
          },
          height: "100vh",
        }}>
        <Carousel
          sx={{
            height: "80%",
            width: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            // "@media (max-width: 600px)": { display: "none" },
          }}>
          {designs?.map((design: any) => (
            <Stack
              key={design.design_id}
              sx={{
                height: "100vh",
                borderRadius: "10px",
                width: "100%",
                backgroundImage: `url(${design.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
              <Stack
                sx={{
                  padding: "20px",
                  backgroundColor: "hsla(95, 25%, 42%, 0.5)",
                  position: "absolute",
                  left: 20,
                  top: 30,
                }}>
                <Typography
                  sx={{ color: "secondary.light" }}
                  component="span"
                  variant="subtitle1">
                  {design.property_name}, {design.property_type}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  padding: "20px",
                  backgroundColor: "primary.dark",
                  position: "absolute",
                  left: "16%",
                  top: "12%",
                }}>
                <Typography
                  sx={{ color: "secondary.light" }}
                  component="span"
                  variant="subtitle1">
                  KSH {design.total_price}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  padding: "20px",
                  position: "absolute",
                  left: "10%",
                  top: "60%",
                }}>
                <Button
                  href={`/designs/${design.design_id}`}
                  sx={{ color: "secondary.light" }}
                  variant="contained">
                  Browse Plan
                </Button>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  padding: "20px",
                  backgroundColor: "#05014a",
                  position: "absolute",
                  right: "10%",
                  top: "50%",
                }}>
                <LocationOnIcon
                  sx={{ fontSize: "25px", color: "secondary.light" }}
                />
                <Typography
                  sx={{ color: "secondary.light" }}
                  component="span"
                  variant="subtitle1">
                  {design.location}, {design.county}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Carousel>
      </Stack>
      <div className={styles.welcomecontainer}>
        <div className={styles.welcomeholder}>
          <h2 className={styles.welcomeheader}>WELCOME TO SMART HOMES</h2>
          <h3 className={styles.welcometopic}>
            {" "}
            WE ARE A CONSTRUCTION COMPANY SERVING THE COMMUNITY PROUDLY{" "}
          </h3>
          <div className={styles.welcomehr}> &#10084;</div>
          <p className={styles.welcomep}>
            Our construction company is known for delivering excellence, with a
            skilled team and extensive experience. From residential homes to
            commercial complexes, our diverse portfolio showcases successful
            projects.
          </p>
        </div>
        <div className={styles.welcomephotocontainer}>
          <img
            className={styles.welcomephoto}
            src="https://i.pinimg.com/564x/25/30/20/25302048256deae4716eb26c5d50aed8.jpg"></img>
        </div>
      </div>
      <div className={styles.maincontainer}>
        <div className={styles.container}>
          <h1 className={styles.number}>1</h1>
          <h3 className={styles.heading}>Architecture</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>2</h1>
          <h3 className={styles.heading}>CONSTRUCTION</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles.container}>
          <h1 className={styles.number}>3</h1>
          <h3 className={styles.heading}>COST ACCOUNTING</h3>
          <p className={styles.paragraph}>
            We address requirements and constraints with the right mix of
            analytical thinking, creativity and artistry — designing buildings
            that make a statement, conserve natural resources and enrich our
            experience.
          </p>
          <hr className={styles.hr}></hr>
        </div>
      </div>
      <div className={styles.projectscontainer}>
        <div className={styles.griditem}>
          <Image
            src={contact}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}> 200</h3>
          <p className={styles.projectsdef}>Client Services</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={graduation}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>65+</h3>
          <p className={styles.projectsdef}>Machinery</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={machinery}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>50</h3>
          <p className={styles.projectsdef}>Qualified Staff</p>
        </div>
        <div className={styles.griditem}>
          <Image
            src={home}
            alt="picture"
            className={styles.projectimage}></Image>
          <h3 className={styles.projectsnumber}>6522</h3>
          <p className={styles.projectsdef}>Projects Completed</p>
        </div>
      </div>
      <div>
        <h3 className={styles.testimonialheader}>TESTIMONIALS</h3>
        <hr className={styles.hr}></hr>
        <div className={styles.uuxdd}>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>
              I am thoroughly impressed with the exceptional quality of work
              delivered by your construction business. From start to finish, the
              attention to detail and professionalism exhibited by your team
              made the construction process a breeze.
            </p>
            <div className={styles.cage}>
              <Image
                src={person1}
                alt="someone"
                className={styles.personprofile}></Image>
              <p className={styles.profilename}>JANE DOE</p>
            </div>
          </div>
          <div className={styles.testimony}>
            <p className={styles.testimonialcontent}>
              I am thoroughly impressed with the exceptional quality of work
              delivered by your construction business. From start to finish, the
              attention to detail and professionalism exhibited by your team
              made the construction process a breeze.
            </p>
            <div className={styles.cage}>
              <Image
                src={person2}
                alt="someone"
                className={styles.personprofile}></Image>
              <p className={styles.profilename}>JOHN DOE</p>
            </div>
          </div>
        </div>
      </div>
      <Stack>
        <Stack
          sx={{
            alignItems: "center",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
          gap={2}>
          <Typography variant="subtitle1">GET IN TOUCH</Typography>
          <Stack
            sx={{
              "@media (min-width: 600px)": {
                width: "60%",
              },
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            gap={3}>
            <TextField
              sx={{ width: "90%" }}
              label="Full Name"
              {...register("name")}
              // className={styles.contactinputs}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Email"
              {...register("email")}
              // className={styles.contactinputs}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Subject"
              {...register("subject")}
              // className={styles.contactinputs}
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
            <TextField
              sx={{ width: "90%" }}
              label="Message"
              {...register("message")}
              // className={styles.contactinputs}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <Button
              sx={{ marginBottom: "20px", width: "90%" }}
              variant="contained"
              type="submit">
              {" "}
              SEND
            </Button>
          </Stack>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Message sent"
          />
        </Stack>
      </Stack>
      {/* <OurServices /> */}
      <Footer />
    </Stack>
  );
};

export default App;
