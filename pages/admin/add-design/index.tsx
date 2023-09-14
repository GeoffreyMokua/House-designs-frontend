import AdminLayout from "@/components/surfaces/AdminLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup
  .object({
    no_of_bedrooms: yup.string().required(),
    no_of_bathrooms: yup.string().required(),
    plinth_area: yup.string().required(),
    location: yup.string().required(),
    neighbourhood: yup.string().required(),
    county: yup.string().required(),
    property_size: yup.string().required(),
    property_name: yup.string().required(),
    total_price: yup.string().required(),
    price_per_sqm: yup.string().required(),
    class_of_finishes: yup.string().required(),
    duration: yup.string().required(),
    property_type: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

const AddDesign = () => {
  const [file, setFile] = useState<any>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit = (data: any) => {
    setLoading(true);
    fetch("https://house-designs-node-backend.onrender.com/designs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        storeImages(data, file);
      });
  };

  const storeImages = async (data: any, images: any) => {
    console.log("the data::", data);
    console.log("images", images);
    const formData = new FormData();
    formData.append("image", images);
    formData.append("design_id", data.design.design_id);
    const res = await axios.post(
      "https://house-designs-node-backend.onrender.com/images",
      formData
    );
    if (res) {
      router.push("/admin/designs");
    }
  };

  console.log(typeof file);
  return (
    <AdminLayout>
      <Stack
        gap={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", height: "100%", flexGrow: 1, p: 5 }}>
        <Typography variant="subtitle1">New design</Typography>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>Number of bedrooms</Typography>
            <TextField {...register("no_of_bedrooms")} />
          </Stack>
          <Stack>
            <Typography>Number of bathrooms</Typography>
            <TextField {...register("no_of_bathrooms")} />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>Plinth Area</Typography>
            <TextField {...register("plinth_area")} placeholder="50000 sq ft" />
          </Stack>
          <Stack>
            <Typography>Location</Typography>
            <TextField {...register("location")} />
          </Stack>
          <Stack>
            <Typography>Neighbourhood</Typography>
            <TextField {...register("neighbourhood")} />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>County</Typography>
            <TextField {...register("county")} />
          </Stack>
          <Stack>
            <Typography>Property size</Typography>
            <TextField {...register("property_size")} />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>Property name</Typography>
            <TextField {...register("property_name")} placeholder="3 bedroom" />
          </Stack>
          <Stack>
            <Typography>Price per sqm </Typography>
            <TextField
              {...register("price_per_sqm")}
              placeholder="50000 sq ft"
            />
          </Stack>
          <Stack>
            <Typography>Total price</Typography>
            <TextField {...register("total_price")} placeholder="50000 sq ft" />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>Class of finishes</Typography>
            <TextField {...register("class_of_finishes")} />
          </Stack>
          <Stack>
            <Typography>Construction duration</Typography>
            <TextField {...register("duration")} />
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            display: "grid",
            "@media (max-width: 600px)": {
              gridTemplateColumns: "1fr",
              gap: 3,
            },
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
          }}>
          <Stack>
            <Typography>Property type</Typography>
            <TextField {...register("property_type")} />
          </Stack>
          <Stack>
            <Typography>Status</Typography>
            <TextField {...register("status")} />
          </Stack>
        </Stack>
        <Stack>
          <Typography>Add images here</Typography>
          <input type="file" onChange={handleChange} />
          <Typography>selected images</Typography>
        </Stack>
        <Stack>
          <Stack
            sx={{
              width: "100%",
              display: "grid",
              "@media (max-width: 600px)": {
                gridTemplateColumns: "1fr",
                gap: 3,
              },
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
            }}>
            <Stack
              sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <Button type="submit" variant="contained">
                {loading && <CircularProgress sx={{ color: "white" }} />}
                Create Design
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </AdminLayout>
  );
};

export default AddDesign;
