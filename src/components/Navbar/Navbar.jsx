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

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
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
    { name: "ABOUT US", link: "/aboutus", id: 1 },
    { name: "CONTACT US", link: "/contactus", id: 2 },
    { name: "PRODUCTS", link: "/products", id: 3 },
  ];

  const { user, handleLogOut } = useAuth();

  return (
    <div>
      <AppBar position="static" elevation={3}>
  {/* background-color: #6d253f; */}
  {/* background-color: #6d253f; */}
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
                  color: "green",
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
                            color: "#ffffffb3",
                            display: "block",
                            fontSize: "15px",
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
                            color: "black",
                          }}
                        >
                          CART
                          
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
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
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
                    }}
                  >
                    <Typography
                      sx={{
                        ml: "auto",
                        my: 2,
                        color: "#ffffffb3",
                        display: "block",
                        fontSize: "15px",
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
                      }}
                    >
                      CART
                    </Typography>
                  </Link>
                  {/* <IconButton>
                    <Badge badgeContent={localStorage.length} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton> */}
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
                        sx={{ color: "white", fontWeight: "bold" }}
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
                          }}
                        >
                          {totalQuantity}
                        </Typography>
                        <NavLink to="/cart">
                          {/* <Badge
                            badgeContent={cart.products.length}
                            color="primary"
                          > */}
                          <IconButton sx={{ color: "#ffffffb3" }}>
                            <ShoppingBasketIcon />
                          </IconButton>
                          {/* </Badge> */}
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
                            fontWeight: "bold",
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
