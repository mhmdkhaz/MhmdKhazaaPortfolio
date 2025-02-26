import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Logo from "../../../assets/Logo.png";

const MinimalFooter = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          color: "white",
          py: 2,

          mt: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box>
          <img src={Logo} alt="Logo" style={{ height: "40px" }} />
        </Box>

        {/* Copyright Text */}
        <Typography variant="body2" color="gray">
          © 2025
          <span style={{ fontWeight: "bold" }}> Mhmd Khazaa</span>
        </Typography>
      </Box>
    </Container>
  );
};

export default MinimalFooter;
