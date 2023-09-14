import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Sidebar from "../../../modules/Sidebar";
import ProtectedRoute from "../protectedRoute";
const AdminLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ProtectedRoute>
      <Stack
        sx={{
          display: "flex",
          position: "sticky",
          top: 0,
          zIndex: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          p: 1.5,
          borderRadius: "6px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 12px 0px #00000040",
        }}>
        <Stack sx={{ my: "auto" }}>
          <Typography variant="subtitle1" fontWeight={500}>
            Welcome Admin
          </Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <Button variant="text">Profile</Button>
          <Button variant="contained">Logout</Button>
        </Stack>
      </Stack>
      <Stack
        gap={1.6}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "3fr 8fr",
        }}>
        <Sidebar />

        <Stack
          sx={{
            flexGrow: 1,
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 12px 0px #00000040",
            p: 1.5,
            borderRadius: "6px",
            m: 1,
          }}>
          {children}
        </Stack>
      </Stack>
    </ProtectedRoute>
  );
};

export default AdminLayout;
