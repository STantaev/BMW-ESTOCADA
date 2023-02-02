import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
// import Jason from "./img/jason-momoa-jason.gif"

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.3rem",
  "@media (max-width:600px)": {
    fontSize: "5.9rem",
  },
  "@media (min-width:600px)": {
    fontSize: "5.9rem",
  },
  "@media (max-width:450px)": {
    fontSize: "3.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "11rem",
  },
};

theme.typography.body1 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
};
theme.typography.body2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop:"-5%"

      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          sx={{
            color: "black",
            fontSize: 200,
            fontWeight: 700,
          }}
        >
          404
        </Typography>
      </ThemeProvider>
         {/* <img src={Image} alt="" className='img' style={{width:"21%"}}/> */}
         {/* <img src={Jason} alt="" style={{width:"15%"}}/> */}
            
      <Typography
        theme={theme}
        variant="body1"
        sx={{ color: "black", flexWrap: "wrap" }}
      >
        Oops! Page not found
      </Typography>

      <Typography
        sx={{
          fontSize: 15,
          flexWrap: "wrap",
          marginTop: 2,
          color: "#778494",
          fontWeight: 500,
          opacity: "60%",
          flexWrap: "wrap",
        }}
        variant="body2"
        theme={theme}
      >
        Oops! The page you are looking for doesn't exist. It might have been
        moved or deleted
      </Typography>

      <Box sx={{ flexWrap: "wrap" }}>
        <Button
          sx={{
            my: 1,
            color: "#778494",
            width: "15%",
            textTransform: "capitalize",
            m: 3,
          }}
          onClick={() => navigate("/")}
        >
          HOME
        </Button>
        <Button
          sx={{
            my: 1,
            color: "#778494",
            width: "15%",
            textTransform: "capitalize",
          }}
          onClick={() => navigate("/products")}
        >
          PRODUCTS
        </Button>
      </Box>
    </Paper>
  );
};

export default NotFound;

// import Nfp from "./img/nfp.gif"

// import React from 'react';

// const NotFound = () => {
//     return (
//         <div style={{width:"100%"}}>
//             <img src={Nfp} alt=""  style={{width:"100%"}}/>
//                 <div>NOT FOUND PAGE</div>
         
//         </div>
//     );
// };

// export default NotFound;
