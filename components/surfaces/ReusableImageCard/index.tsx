import HotelIcon from "@mui/icons-material/Hotel";
import Box from "@mui/material/Box";

import BathtubIcon from "@mui/icons-material/Bathtub";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ReusableImageCard: React.FC<{
  price: number;
  property_type: string;
  property_name: string;
  no_of_bathrooms: number;
  no_of_bedrooms: number;
  image1: any;
}> = ({
  price,
  property_type,
  property_name,
  no_of_bathrooms,
  no_of_bedrooms,
  image1,
}) => {
  return (
    <Grid sx={{}} item xs={12} sm={12} md={6} lg={4}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: "400px",
          width: "100%",
          borderRadius: "15px",
          "@media (min-width: 400px)": {
            height: "600px",
            position: "relative",
          },
        }}>
        <Box sx={{ width: "100%", height: "60%" }}>
          <Image
            width={300}
            height={400}
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            src={image1}
            alt=""
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30%",
            padding: 3,
            gap: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography variant="body1">Build Cost</Typography>
            <Typography fontWeight={700} variant="subtitle2">
              {price}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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

          <Typography component="span" variant="subtitle2">
            {property_name}
          </Typography>
          <Typography component="span" variant="subtitle1">
            {property_type}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "95%",
            alignSelf: "center",
          }}>
          <Button variant="text">save</Button>
          <Button sx={{ fontWeigth: "600" }} variant="outlined">
            view
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ReusableImageCard;
