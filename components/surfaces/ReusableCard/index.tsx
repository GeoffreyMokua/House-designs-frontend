import ImageUploadModal from "@/modules/Admin/components/ImageUploadModal";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
const ReusableCard: React.FC<{
  design_id: number | string;
  total_price: number | string;
  property_type: string;
  property_name: string;
  no_of_bathrooms: number | string;
  no_of_bedrooms: number | string;
  images?: any[];
  image1?: any;
  image2?: any;
  image3?: any;
  image4?: any;
  image5?: any;
  location: string;
  county: string;
  status: string;
  property_size: string;
  plinth_area: string;
}> = ({
  total_price,
  location,
  property_type,
  property_name,
  no_of_bathrooms,
  no_of_bedrooms,
  images,
  design_id,
  county,
  status,
  property_size,
  plinth_area,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    setOpen(null);
  };
  const handleOpenDialog = (id: any) => {
    setOpen(id);
  };
  const handleClose = async (data: any, file: any) => {
    setLoading(true);
    console.log("file:;", file);
    console.log("data:;", data);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("design_id", data);
    const res = await axios.post(
      "https://house-designs-node-backend.onrender.com/images",
      formData
    );
    if (res) {
      setLoading(false);
      setOpen(null);
      router.refresh();
    }
  };

  return (
    <Stack
      sx={{
        maxWidth: "300px",
        borderRadius: "6px",
        p: 1,
        border: "1px solid #f3eeed",
        mb: "auto",
        cursor: "pointer",
        "&:hover": {
          border: "1px solid secondary.light",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 12px 0px #00000040",
        },
      }}>
      <Carousel
        sx={{
          height: "160px",
        }}>
        {images?.map((image, index) => (
          <CardMedia key={index} sx={{ minHeight: "160px" }} image={image} />
        ))}
      </Carousel>

      <Stack sx={{ gap: "3px", flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {property_type}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body1">Build Cost</Typography>
          <Typography fontWeight={700} variant="subtitle2">
            {total_price}
          </Typography>
          <Stack
            onClick={() => handleOpenDialog(design_id)}
            direction="row"
            sx={{
              marginLeft: "auto",
              p: 1,
              borderRadius: "8px",
              "&:hover": {
                border: "1px solid secondary.light",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 12px 0px #00000040",
              },
            }}>
            <FileUploadOutlinedIcon sx={{ fontSize: "16px" }} />
            <Typography>add images</Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "right",
          }}>
          <Typography
            sx={{
              color: "primary.dark",
              alignItems: "center",
              display: "flex",
              gap: 1,
            }}
            variant="subtitle2">
            {" "}
            <Typography variant="subtitle2" component="span">
              {" "}
              <HotelIcon />
            </Typography>
            <Typography variant="subtitle2" component="span">
              {no_of_bedrooms}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "primary.dark",
              alignItems: "center",
              display: "flex",
              gap: 1,
            }}
            variant="subtitle2">
            {" "}
            <Typography variant="subtitle2" component="span">
              {" "}
              <BathtubIcon />
            </Typography>
            <Typography variant="subtitle2" component="span">
              {no_of_bathrooms}
            </Typography>
          </Typography>
        </Box>

        <Typography gutterBottom variant="subtitle1">
          {property_name}
        </Typography>
        <Typography variant="body1" gap={1} sx={{ display: "flex" }}>
          <LocationOnIcon
            sx={{
              fontSize: "20px",
              color: "primary.main",
              lineHeight: "22px",
            }}
          />

          <Typography variant="subtitle2">
            {location} , {county}
          </Typography>
        </Typography>
        <Stack direction="row" gap={2} sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontWeight: 600 }}> Plinth area: </Typography>
          <Typography>{plinth_area}</Typography>{" "}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "end",
        }}>
        {pathname === "/admin/designs" ? (
          <Stack direction="row" gap={2} sx={{}}>
            {" "}
            <EditIcon sx={{ color: "primary.dark", cursor: "pointer" }} />
            <DeleteIcon sx={{ color: "red" }} />
          </Stack>
        ) : null}

        <RemoveRedEyeIcon
          onClick={() =>
            router.push(
              pathname === "/admin/designs"
                ? `/admin/designs/${design_id}`
                : `/designs/${design_id}`
            )
          }
          sx={{ color: "primary.light" }}
        />
      </Stack>
      <ImageUploadModal
        loading={loading}
        isModalOpen={open}
        handleClose={handleClose}
        handleCancel={handleCancel}
      />
    </Stack>
  );
};

export default ReusableCard;
