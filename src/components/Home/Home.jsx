import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  });

  const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.7",
  });

  return (
    <div>
      <div>
      <Box>
        <Typography
          align="center"
          variant="h3"
          sx={{ fontWeight: 900, bgcolor: "lightgrey" }}
        >
          41 <b style={{ color: "#424242" }}>54</b>
        </Typography>
        <Typography align="center" variant="body1" sx={{ fontWeight: 600 }}>
          {/* The Most Trusted Place To Buy Guns */}
        </Typography>

        <Box
          style={{
            background:
              "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg) no-repeat center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "40%", padding: 20 }}>
            <Box sx={{ background: "black", opacity: "0.8" }}>
              {/* <Typography variant={"h6"} color="#263238" align="center" pt={8}> */}
                {/* Hunting and Shooting Must-Haves */}
              {/* </Typography> */}
              {/* <Typography variant="h4" align="center"> */}
                {/* Don't forget to practice. Aim true. Shoot straight */}
              {/* </Typography> */}
              {/* <Typography variant="body1" align="center" pb={8}> */}
                {/* Bang,Bang! */}
              {/* </Typography> */}
              {/* <Button */}
                {/* variant="contained"
                color="error"
                sx={{ marginBottom: 7 }}
              > */}
                {/* BUY NOW */}
              {/* </Button> */}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Stack direction={"row"} spacing={4} mt={5}>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* GIFT CARDS */}
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* WEAPON & FIREARMS */}
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* AMMO */}
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </div>
      <Box>
        <Typography
          align="center"
          variant="h3"
          sx={{ fontWeight: 900, bgcolor: "lightgrey" }}
        >
          41 <b style={{ color: "#424242" }}>54</b>
        </Typography>
        <Typography align="center" variant="body1" sx={{ fontWeight: 600 }}>
          {/* The Most Trusted Place To Buy Guns */}
        </Typography>

        <Box
          style={{
            background:
              "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg) no-repeat center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "40%", padding: 20 }}>
            <Box sx={{ background: "#9e9e9e", opacity: "0.8" }}>
             786454
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Stack direction={"row"} spacing={4} mt={5}>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* GIFT CARDS */}
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* WEAPON & FIREARMS */}
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              {/* AMMO */}
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </div>
  );
};



export default Home;