// components/ProtectedRoute.js
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the JWT token in local storage)
    const isAuthenticated = localStorage.getItem("jwtToken");

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      router.push("/admin_login");
    }
  }, []);

  return (
    <Stack sx={{ backgroundColor: "#F5F5F5", height: "100%", flexGrow: 1 }}>
      {children}
    </Stack>
  );
};

export default ProtectedRoute;
