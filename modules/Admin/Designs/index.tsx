import ReusableCard from "@/components/surfaces/ReusableCard";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
const Designs: React.FC<{ designs: any }> = ({ designs }) => {
  return (
    <Stack gap={2}>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <Typography variant="subtitle1">Manage Designs?</Typography>
        <AppSettingsAltOutlinedIcon />
      </Stack>
      <Stack
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "1fr 1fr 1fr",
          mb: "auto",
        }}>
        {designs?.map(
          ({
            county,
            location,
            no_of_bathrooms,
            no_of_bedrooms,
            plinth_area,
            total_price,
            property_name,
            property_type,
            property_size,
            design_id,
            status,
            images,
          }: any) => (
            <ReusableCard
              status={status}
              design_id={design_id}
              county={county}
              location={location}
              no_of_bathrooms={no_of_bathrooms}
              no_of_bedrooms={no_of_bedrooms}
              plinth_area={plinth_area}
              total_price={total_price}
              property_name={property_name}
              property_type={property_type}
              property_size={property_size}
              images={images}
            />
          )
        )}
      </Stack>
    </Stack>
  );
};

export default Designs;
