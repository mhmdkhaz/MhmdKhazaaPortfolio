import React from "react";
import { Box, Typography, Button, Grid, Link, Container } from "@mui/material";
import { styles } from "./Footer.styles";

const siteMap = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Work", href: "#Work" },
  { name: "Contact me", href: "#Contact" },
];

const Social = [
  { name: "GitHub", href: "https://github.com/mhmdkhaz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-khazaa" },
  { name: "Facebook", href: "https://www.facebook.com/?locale=ar_AR" },
  { name: "Instagram", href: "https://www.instagram.com/mohammedkhazaa/" },
];

const Footer = () => {
  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography sx={styles.title} variant="h4" fontWeight="bold">
              Let's work <br /> together today!
            </Typography>
            <Button variant="contained" sx={styles.start}>
              Start project →
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} container spacing={4}>
            {/* Sitemap */}
            <Grid item xs={6}>
              <Typography variant="h6" fontWeight="bold">
                Sitemap
              </Typography>
              {siteMap.map((item) => (
                <Typography key={item.name} sx={styles.sitemap}>
                  <Link
                    href={item.href}
                    target="_blank"
                    underline="none"
                    color="inherit"
                  >
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* Socials */}
            <Grid item xs={6}>
              <Typography variant="h6" fontWeight="bold">
                Socials
              </Typography>
              {Social.map((item) => (
                <Typography key={item.name} sx={styles.socials}>
                  <Link
                    href={item.href}
                    target="_blank"
                    underline="none"
                    color="inherit"
                  >
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
