import BathtubIcon from "@mui/icons-material/Bathtub";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { usePathname } from "next/navigation";
import React from "react";
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
  image1,
  image2,
  image3,
  image4,
  image5,
  images,
  design_id,
  county,
  status,
  property_size,
  plinth_area,
}) => {
  const pathname = usePathname();

  return (
    <Card sx={{ maxWidth: "350px" }}>
      <Carousel>
        {images?.map((image, index) => (
          <CardMedia key={index} sx={{ height: 250 }} image={image} />
        ))}
      </Carousel>

      <CardContent sx={{ gap: "30px", flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {property_type}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body1">Build Cost</Typography>
          <Typography fontWeight={700} variant="subtitle2">
            {total_price}
          </Typography>
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
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "end",
        }}>
        {pathname === "/admin/designs" ? (
          <Button
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            variant="contained">
            delete
          </Button>
        ) : null}
        <Button href={`designs/${design_id}`} variant="contained" size="small">
          Browse Plan
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReusableCard;
