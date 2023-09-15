import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const AdminLogin = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();
  const onSubmit = (data: IFormInput) => {
    fetch("https://house-designs-node-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        pasword: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwtToken", data.token);
        router.push("/admin");
      });
  };

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the JWT token in local storage)
    const isAuthenticated = localStorage.getItem("jwtToken");

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      router.push("/admin");
    }
  }, []);

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexGrow: 1,
      }}>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={2}
        sx={{
          borderRadius: "8px",
          "@media (max-width: 600px)": {
            width: "100%",
          },

          "@media (min-width: 900px)": {
            width: "50%",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 42px 0px #00000040",
          },
          p: 5,
        }}>
        <Typography variant="h1" align="center">
          Welcome Admin
        </Typography>
        <Stack gap={1}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "22px", fontWeight: 500 }}>
            Email
          </Typography>
          <TextField
            autoComplete="off"
            {...register("email")}
            // className={styles.contactinputs}
            // error={!!errors.subject}
            // helperText={errors.subject?.message}
          />
        </Stack>
        <Stack gap={1}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "22px", fontWeight: 500 }}>
            Password
          </Typography>
          <TextField
            label="password"
            type="password"
            autoComplete="off"
            {...register("password")}
            // className={styles.contactinputs}
            // error={!!errors.subject}
            // helperText={errors.subject?.message}
          />
        </Stack>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default AdminLogin;
