import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useCart } from "../../contexts/CartContextProvider";
import { Grid } from "@mui/material";
import logo from "./Logo1.png";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { getCart, cart, totalQuantity } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { name: "HOME", link: "/", id: 1 },
    { name: "ABOUT", link: "/aboutus", id: 2 },
    { name: "CONTACT", link: "/contactus", id: 3 },
    { name: "MODELS", link: "/products", id: 4 },
   
  ];

  const { user, handleLogOut } = useAuth();

  return (
    <div>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="xll" sx={{ background: "#6d253f" }}>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              <img id="logo" src={logo} alt="" width="100px" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                  color: "black",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box sx={{ bgcolor: "black" }}>
                  {pages.map((page) => (
                    <MenuItem key={page.id}>
                      <NavLink
                        to={page.link}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Typography
                          sx={{
                            ml: "auto",
                            my: 1,
                            // color: "#ffffffb3",
                            display: "block",
                            fontSize: "15px",
                            fontFamily: "'Bungee Inline', cursive",
                          }}
                        >
                          {page.name}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                  {user.email === "sultan_tantaev@mail.ru" ? (
                    <MenuItem>
                      <NavLink
                        to="/admin"
                        style={{
                          textDecoration: "none",
                          color: "#ffffffb3",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            ml: "auto",
                            my: 2,
                            color: "#ffffffb3",
                            display: "block",
                            fontFamily: "'Bungee Spice', cursive",
                          }}
                        >
                          ADMIN
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Link to="/cart">
                        <Typography
                          sx={{
                            ml: "auto",
                            my: 2,
                            color: "black",
                            display: "block",
                            color: "black",
                            fontFamily: "'Bungee Spice', cursive",
                          }}
                        >
                          Корзина
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                </Box>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "'Bungee Spice', cursive",
                display: { xs: "flex", md: "none" },
              }}
            >
              <img
                id="logo"
                // src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/logo_3.png"
                alt=""
              />
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Bungee Spice', cursive",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id}>
                  <NavLink
                    to={page.link}
                    style={{
                      textDecoration: "none",
                      color: "#ffffffb3",
                      fontSize: "15px",
                      fontFamily: "Bungee Spice, cursive",
                    }}
                  >
                    <Typography
                      sx={{
                        ml: "auto",
                        my: 2,
                        color: "#ffffffb3",
                        display: "block",
                        fontSize: "15px",
                        fontFamily: "Bungee Spice, cursive",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
              {user.email === "admin@admin.com" ? (
                <MenuItem>
                  <NavLink
                    to="/admin"
                    style={{
                      textDecoration: "none",
                      color: "#ffffffb3",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        ml: "auto",
                        my: 2,
                        color: "#ffffffb3",
                        fontFamily: "Bungee Spice, cursive",
                        display: "block",
                      }}
                    >
                      ADMIN
                    </Typography>
                  </NavLink>
                </MenuItem>
              ) : (
                <MenuItem>
                  <Link to="/cart">
                    <Typography
                      sx={{
                        ml: "auto",
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "Bungee Spice, cursive",
                      }}
                    >
                      CART
                    </Typography>
                  </Link>
                </MenuItem>
              )}
              {/* // -------------------------------------------------------------------- */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {user.email ? (
                <>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Button
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "Bungee Spice, cursive;",
                        }}
                        onClick={handleLogOut}
                      >
                        LOGOUT
                      </Button>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MenuItem>
                        <Typography
                          sx={{
                            color: "white",
                            fontFamily: "Bungee Spice, cursive",
                          }}
                        >
                          {totalQuantity}
                        </Typography>
                        <NavLink to="/cart">
                            <IconButton sx={{ color: "#121212" }}>
                              <LocalMallIcon />
                            </IconButton>
                        </NavLink>
                      </MenuItem>
                    </Grid>
                    <Grid item>
                      <NavLink
                        to="/auth"
                        style={{
                          textDecoration: "none",
                          color: "#ffffffb3",
                          fontSize: "15px",
                        }}
                      >
                        <Button
                          sx={{
                            color: "#ffffffb3",
                            fontFamily: "Bungee Spice, cursive",
                            fontWeight: "bold",
                            // fontFami
                          }}
                        >
                          LOGIN
                        </Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
