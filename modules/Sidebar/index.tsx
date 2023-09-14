import ApartmentIcon from "@mui/icons-material/Apartment";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
const dashIcon = <GridViewIcon />;
const designIcon = <DomainAddIcon />;
const designsIcon = <ApartmentIcon />;
const profileIcon = <PersonIcon />;

const sidebarConfig = [
  {
    id: "1",
    name: "Dashboard",
    link: "/admin",
    Icon: dashIcon,
  },
  {
    id: "2",
    name: "Add New Design",
    link: "/admin/add-design",
    Icon: designIcon,
  },
  {
    id: "3",
    name: "Designs",
    link: "/admin/designs",
    Icon: designsIcon,
  },
  {
    id: "4",
    name: "Profile",
    link: "/admin/profile",
    Icon: profileIcon,
  },
];

const SidebarListItem: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Stack
      direction="row"
      gap={1.3}
      sx={{
        cursor: "pointer",
        padding: "10px",
        alignItems: "center",
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
        },
      }}>
      {children}
    </Stack>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack
      gap={2}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 12px 0px #00000040",
        p: 1.5,
        borderRadius: "6px",
        position: "sticky",
        top: 80, // Make the sidebar stick to the top
        maxHeight: "90vh", // Limit the sidebar's height to the viewport height
        overflowY: "auto",
      }}>
      {sidebarConfig.map(({ Icon, link, name, id }) => (
        <Stack
          key={link}
          direction="row"
          onClick={() => {
            router.push(link);
          }}
          gap={1.3}
          sx={{
            backgroundColor: pathname === link ? "primary.main" : "",
            color: pathname === link ? "white" : "",

            cursor: "pointer",
            padding: "10px",
            alignItems: "center",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}>
          {Icon}
          <Typography fontWeight={500} fontSize="18px">
            {name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
export default Sidebar;
