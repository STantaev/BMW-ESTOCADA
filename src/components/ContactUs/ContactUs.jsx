import {
  Box,
  Button,
  Grid,
  ImageList,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Image } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ClassNames } from "@emotion/react";
import { dark } from "@mui/material/styles/createPalette";

const ContactUs = () => {
  return (
    <Grid container mt={5}>
      <Grid item xs={12} backgroundColor={"orange"}>
        
        <Box width={700} backgroundColor={"blue"}>
          
          <Typography
            textAlign={"start"}
            pl={15}
            variant="h4"
            fontWeight={"900"}
            mb={2}
            fontFamily={"sans-serif"}
          >
            
            Connect With Us
          </Typography>
          <Typography
            variant="subtitle1"
            // fontFamily={"Roboto"}
            fontWeight={"400"}
            fontSize={18}
            textAlign={"start"}
            pl={15}
            pr={5}
            lineHeight={1.5}
          >
            We would love to respond to your queries and help you succeed . Feel
            free to get in touch with us
          </Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          margin: "auto",
          mt: 5,
        }}
      >
        <Grid
          // mt={5}

          py={3}
          container
          display={"flex"}
          justifyContent={"center"}
          // backgroundColor="black"
        >
          <Box
            sx={{
              width: 800,
              backgroundColor: "brown",
              pl: 5,
            }}
          >
            <Typography
              textAlign={"start"}
              variant="subtitle1"
              // fontFamily={"Roboto"}
              fontWeight={"400"}
              fontSize={25}
            >
              Send your request
            </Typography>

            <Grid container mt={3}>
              {/* backgroundColor={"pink"} */}
              <Grid
                item
                xs={6}
                // backgroundColor={"silver"}
                display={"flex"}
                flexDirection={"column"}
                rowGap={2.7}
              >
                <Grid>
                  <TextField
                    id="standard-basic"
                    label="Your Name"
                    variant="standard"
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"

                    // rows={4}
                  />
                </Grid>
                <Grid>
                  <TextField
                    id="standard-basic"
                    label="Your Number"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Grid item xs={6} rowGap={3}>
                <TextField
                  id="standard-multiline-static"
                  rows={7}
                  multiline
                  label="Your Messege"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} mt={3}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#111444", color: "white" }}
                  endIcon={<SendIcon />}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              width: 400,
              backgroundColor: "#141414",
              pl: 5,
            }}
          >
            <Typography
              // fontFamily={"Roboto"}
              fontWeight={"400"}
              fontSize={25}
              textAlign={"start"}
            >
              Reach Us
            </Typography>
            <TableContainer
              sx={{ background: "transparent", mt: 3, border: 0, boxShadow: 0 }}
              component={Paper}
            >
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  {" "}
                  <EmailIcon />
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  <Typography mb={1}>bmw</Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  {" "}
                  <SettingsPhoneIcon />
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  <Typography mb={1}>+996 708 41 31 11</Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  {" "}
                  <HomeIcon />
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "none" }}
                  component={"th"}
                  scope={"row"}
                >
                  <Typography>Tabyshalieva 29</Typography>
                </TableCell>
              </TableRow>
            </TableContainer>
          </Box>
        </Grid>
      </Box>
      <Grid item xs={6}>
        <Box></Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
