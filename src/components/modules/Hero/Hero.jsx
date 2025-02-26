import React from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Container,
  Grid,
} from "@mui/material";
import heroStyles from "./Hero.styles";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import AboutImg from "../../../assets/MK-White.png";
import Logo from "../../../assets/MK.png";
import CV from "../../../assets/CV/Mhmd-Khazaa-FrontEnd.pdf";

const HeroSection = () => {
  return (
    <Box id="hero" sx={heroStyles.container}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignContent={"center"}
          height={"100vh"}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={heroStyles.leftSection}>
              <Box sx={heroStyles.profileStatus}>
                <Box
                  component="img"
                  src={Logo}
                  sx={{
                    width: 30,
                    height: 30,
                    background: "#e5e7eb",
                    borderRadius: 2,
                    p: 0.5,
                  }}
                />
                <Typography sx={heroStyles.onLine}>
                  <Typography sx={heroStyles.TowOnLine}></Typography>
                </Typography>
                <Typography sx={heroStyles.statusText}>
                  Available for Work
                </Typography>
              </Box>
              <Typography variant="h2" sx={heroStyles.headline}>
                Building Scalable Modern Websites for the Future
              </Typography>
              <Box sx={heroStyles.buttonsContainer}>
                <Button
                  variant="contained"
                  sx={heroStyles.downloadButton}
                  component="a"
                  href={CV}
                  download="Mohammed_Khazaa_CV.pdf"
                >
                  Download CV <VerticalAlignBottomIcon />
                </Button>

                <Button
                  href="#about"
                  variant="outlined"
                  sx={heroStyles.scrollButton}
                >
                  Scroll down <VerticalAlignBottomIcon />
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box sx={heroStyles.rightSection}>
              <Box sx={heroStyles.figure}>
                <Box
                  component="img"
                  src={AboutImg}
                  alt="Profile"
                  sx={heroStyles.profileImage}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
