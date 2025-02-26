import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { styles } from "./PortfolioCard.styles";
import Logo from "../../../assets/Logo.png";

const PortfolioCard = () => {
  return (
    <Box id="about">
      <Container maxWidth="lg">
        <Box sx={styles.card}>
          <Typography variant="h6" sx={styles.heading}>
            Welcome! I'm <span style={styles.highlight}>Mhmd</span>, is a
            professional web developer who blends creativity with technical
            expertise to craft visually stunning and highly functional websites.
            With extensive experience in React , he delivers seamless user
            experiences and elegant designs tailored to meet clients' needs with
            precision.
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            sx={styles.statsContainer}
          >
            <Grid md={6} lg={6} item sx={styles.statItem}>
              {/* <Box>
                <Typography sx={styles.statValue}>
                  <Typography sx={styles.statPlus}>+</Typography>20
                </Typography>
                <Typography sx={styles.statLabel}>Projects Done</Typography>
              </Box> */}

              <Box>
                <Typography sx={styles.statValue}>
                  <Typography sx={styles.statPlus}>+</Typography>2
                </Typography>
                <Typography sx={styles.statLabel}>
                  Years of Experience
                </Typography>
              </Box>
            </Grid>
            <Grid
              md={6}
              lg={6}
              item
              sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                ...styles.statItem,
              }}
            >
              <Box>
                <Typography sx={styles.logo}>
                  <Box component="img" src={Logo} width={100} height={100} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioCard;
