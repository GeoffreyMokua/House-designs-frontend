import ReusableCard from "@/components/surfaces/ReusableCard";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";

import TuneIcon from "@mui/icons-material/Tune";
import { TransitionProps } from "@mui/material/transitions";

interface CardDetails {
  price: number;
  propertyType: string; //4 bedroom
  propertyCategory: string; //Bungelow massionnette
  numberOfBathrooms: number; //2
  numberOfBedrooms: number; //3
  id: number;
  image1: any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Main: React.FC<{ designs: any }> = ({ designs }) => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = useState(""); //filter state
  const [searchProperty, setSearchProperty] = useState("county");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSearchProperty(newValue);
  };
  // const filtered = designs?.filter(
  //   (obj: any) => obj[searchProperty].toLowerCase() === query.toLowerCase()
  // );
  const filtered = designs?.filter((obj: any) => {
    return obj[searchProperty]
      ?.toString()
      .toLowerCase()
      .startsWith(query.toLowerCase());
  });

  return (
    <Stack
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}>
      <Box
        sx={{
          width: "100%",

          backgroundColor: "secondary.light",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            marginTop: "90px",
            marginBottom: "40px",
            "@media(max-width: 600px)": {
              marginRight: "30px",
              marginLeft: "30px",
            },
          }}
          align="center"
          variant="subtitle1">
          Innovative Solutions for Creating Beautiful Designs{" "}
        </Typography>

        <Typography align="center" sx={{ marginX: 4 }} variant="h6">
          Explore our extensive catalog to find the perfect house plan that
          matches your dreams, and let us transform it into a stunning reality.
        </Typography>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          sx={{ color: "primary.dark", marginBottom: "20px" }}>
          Search Designs
          <TuneIcon />
        </Button>
      </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Search designs
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
            width: "70%",
            "@media (max-width: 600px)": {
              width: "95%",
            },
          }}>
          <Tabs value={searchProperty} onChange={handleChange} centered>
            <Tab value="county" label="County" />
            <Tab value="no_of_bedrooms" label="No. of bedrooms" />
            <Tab value="property_type" label="Category" />
          </Tabs>
        </Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            border: "1px solid #A4BE7B",
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            height: "70px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "70%",
            "@media (max-width: 600px)": {
              width: "95%",
            },
          }}>
          <Stack direction="row" sx={{ flexGrow: 1 }}>
            {" "}
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <FilterListIcon sx={{ color: "primary.dark" }} />
            </IconButton>
            <InputBase
              onChange={(e: any) => setQuery(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Designs"
              inputProps={{ "aria-label": "search Designs" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Stack>
        </Paper>
        <br></br>
        <Typography align="center" variant="subtitle1">
          {filtered?.length} results found
        </Typography>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginRight: "auto",
            marginLeft: "auto",
            width: "80%",
            gap: "10px",
            marginTop: "20px",
            "@media (max-width: 600px)": {
              display: "grid",
              gridTemplateColumns: "  1fr",
            },
          }}>
          {filtered.map((design: any) => (
            <ReusableCard key={design.design_id} {...design} />
          ))}
        </Stack>
      </Dialog>
      <Stack
        sx={{
          alignSelf: "center",
          display: "grid",
          rowGap: 2,
          columnGap: 2,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          "@media(min-width: 600px)": {
            width: "90%",
            alignSelf: "center",
            display: "grid",
            rowGap: 2,
            columnGap: 2,
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          },
          "@media(max-width: 600px)": {
            width: "90%",
            alignSelf: "center",
            display: "grid",
            rowGap: 2,
            columnGap: 2,
            gridTemplateColumns: "1fr ",
          },
          width: "100%",
          borderRadius: "10px",
          marginBottom: "20px",
        }}>
        {designs.map((design: any) => (
          <ReusableCard key={design.design_id} {...design} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Main;
