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
    margin: "25% 50px 25% 100px",
    background: "black",
    opacity: "0.7",
  });

  return (
    <div>
      <div>
      <Box>
        <Box
          style={{
            background:
              "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/2022/BMW_M4_Competition-BDE-stage-02.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674142100266.jpg) no-repeat center",
            backgroundSize: "cover",
            height: 700,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "40%", padding: 2 }}>
            <Box sx={{ textAlign: "center" ,  opacity: "0.8" }}>
              <Typography variant={"h3"} color="#263238" align="center" pt={8}>
                Добро пожаловать!
              </Typography>
              <Typography variant="h4" align="center">
                В жизни можно поменять многое, но BMW — только на BMW.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Stack direction={"row"} spacing={1} mt={1}>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m3-cs/2023/bmw-m3-cs-stage-teaser-02.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1673886859814.png)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              THE CS MODELS FROM BMW M.
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m2coupe/bmw-m2-coupe-cp-02.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1669288191844.png)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              THE M2
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m3-touring/bmw-m3-competition-touring-stage-teaser-05.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1655848255509.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              THE M3 TOURING
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </div>
      <Box>
        <Typography align="center" variant="body1" sx={{ fontWeight: 700 }}>
          
        </Typography>
        <Box
          style={{
            background:
              "url(https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/3-0-csl/bmw-3-0-csl-stage-teaser.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1669130154918.png) no-repeat center",
            backgroundSize: "cover",
            height: 700,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
        </Box>
      </Box>
    </div>
  );
};

export default Home;