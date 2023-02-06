import * as React from "react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Input,
  MenuItem,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ExpandMore } from "@mui/icons-material";
import logo from "../Navbar/Logo1.png";

const Footer = () => {
  const { user, handleLogOut } = useAuth();
  const pages = [
    { name: "ABOUT US", link: "/aboutus", id: 1 },
    { name: "CONTACT US", link: "/contactus", id: 2 },
    { name: "PRODUCTS", link: "/products", id: 3 },
  ];
  const socialMedias = [
    { name: "INSTAGRAM", link: "*", id: 1 },
    { name: "FACEBOOK", link: "*", id: 2 },
    { name: "YOUTUBE", link: "https://www.youtube.com/watch?v=XWePdlCGTno", id: 3 },
  ];
  return (
    <footer className={'footer'}
     style={{background: "white",}}>
      <Box
        className="footer"
        sx={{
          bgcolor: "#6d253f",
          mt: "30px",
          minHeight: "250px",
          width: "100%",
        }}
        elevation={3}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "10px",
              mb: "10px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2}}
            >
              <img id="logo" src={logo} alt="" width="100px" />
            </Typography>
            <Box>
              {user.email ? (
                <Button
                  sx={{ color: "#ffffffb3", fontWeight: "brave", fontFamily: "Bungee Spice, cursive"}}
                  onClick={handleLogOut}
                >
                  LOGOUT
                </Button>
              ) : (
                <NavLink to="/auth">
                  <Button sx={{ color: "black", fontWeight: "bold", fontFamily: "Bungee Spice, cursive", }}>
                    LOGIN
                  </Button>
                </NavLink>
              )}
            </Box>
          </Box>

          <Divider white />
          <Box
            sx={{
              justifyContent: "space-between",
              flexGrow: 1,
              display: "flex",
              mt: "10px",
              mb: "10px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Grid sx={{ width: "200px" }}>
              <Typography variant="h6"  sx={{color: "yellow", fontFamily: "Bungee Spice, cursive"}}>PAGES</Typography>

              {pages.map((page) => (
                <NavLink to={page.link}>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: "auto",
                      my: 1,
                      color: "black",
                      display: "block",
                      mb: "5px",
                      fontFamily: "Bungee Spice"
                    }}
                  >
                    {page.name}
                  </Typography>
                </NavLink>
              ))}
            </Grid>
            <Grid sx={{ width: "200px" }}>
              <Typography variant="h6" sx={{color: "yellow", fontFamily: "Bungee Spice, cursive",}}>SOCIAL MEDIAS</Typography>
              {socialMedias.map((item) => (
                <NavLink to={item.link}>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: "auto",
                      my: 1,
                      color: "black",
                      display: "block",
                      mb: "5px",
                      fontFamily: "Bungee Spice, cursive",
                    }}
                  >
                    {item.name}
                  </Typography>
                </NavLink>
              ))}
            </Grid>
            <Grid sx={{ width: "200px" }}>
              <Typography variant="h6" sx={{color: "yellow",fontFamily: "Bungee Spice, cursive",}}>BMW CENTER</Typography>
              <Typography
                variant="body2"
                sx={{
                  ml: "auto",
                  my: 1,
                  color: "#ffffffb3",
                  display: "block",
                  mb: "5px",
                }}
              >
                Адрес: 327 ул. Юсупа Абдрахманова,
                <br />
                Бишкек 720011
              </Typography>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" }}}>
            <Accordion sx={{background: "#e60a1c74", border: "1px solid rgba(255, 255, 255, 0.8)" }}>
              <AccordionSummary 
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{color: "yellow"}}>PAGES</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid sx={{ width: "100%" }}>
                  {pages.map((page) => (
                    <NavLink to={page.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          ml: "0",
                          my: 1,
                          color: "white",
                          display: "block",
                          mb: "5px",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </NavLink>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: "#e60a1c74", border: "1px solid rgba(255, 255, 255, 0.8)"  }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{color: "white"}}>SOCIAL MEDIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid sx={{ width: "100%" }}>
                  {socialMedias.map((item) => (
                    <NavLink to={item.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          ml: "auto",
                          my: 1,
                          color: "#ffffffb3",
                          display: "block",
                          mb: "5px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </NavLink>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: "#e60a1c74", border: "1px solid rgba(255, 255, 255, 0.8)" }}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{color: "black"}}>BMW CENTER</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid sx={{ width: "200px" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      ml: "auto",
                      my: 1,
                      color: "white",
                      display: "block",
                      mb: "5px",
                    }}
                  >
                     
                     Адрес: 327 ул. Юсупа Абдрахманова,
                    <br />
                    Бишкек 720011
                  </Typography>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Divider white />
          <Typography sx={{ color: "white", mt: "5px"}}>
            © 2023 BMW//M
          </Typography>
        </Container>
      </Box>
    </footer>
  );

};

export default Footer;
