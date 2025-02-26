import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, WhatsApp, Telegram, LinkedIn } from "@mui/icons-material";
import { useStyles } from "./ContactForm.styles";

const ContactForm = () => {
  return (
    <Box sx={useStyles.root} id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid item xs={12} md={6} sx={useStyles.leftSide}>
            <Box>
              <Typography variant="h4" sx={useStyles.heading}>
                Contact me for collaboration
              </Typography>
              <Typography variant="body1" mt={2} sx={useStyles.description}>
                Reach out today to discuss your project needs and start
                collaborating on something amazing!
              </Typography>
            </Box>
            {/* Social Icons */}
            <Box sx={useStyles.socialIcons}>
              <IconButton
                href="https://www.facebook.com/?locale=ar_AR"
                target="_blank"
                sx={useStyles.containerSocial}
              >
                <Facebook sx={useStyles.icon} />
              </IconButton>
              <IconButton
                href="https://wa.me/+963957432443"
                target="_blank"
                sx={useStyles.containerSocial}
              >
                <WhatsApp sx={useStyles.icon} />
              </IconButton>
              <IconButton
                href=""
                target="_blank"
                sx={useStyles.containerSocial}
              >
                <Telegram sx={useStyles.icon} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/mohammed-khazaa"
                target="_blank"
                sx={useStyles.containerSocial}
              >
                <LinkedIn sx={useStyles.icon} />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6}>
            <form
              action="https://formsubmit.co/mhmdkh0957@gmail.com" // Replace YOUR_EMAIL
              method="POST"
              style={useStyles.form}
            >
              <Box sx={useStyles.flexInput}>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={useStyles.label}>
                    Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Mhmd Khazaa"
                    sx={useStyles.input}
                    color="#fff"
                    name="name" // Added name attribute
                    required
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={useStyles.label}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Mhmd@gmail.com"
                    sx={useStyles.input}
                    type="email"
                    name="email" // Added name attribute
                    required
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={useStyles.label}>
                  Message
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Hello"
                  multiline
                  rows={5}
                  sx={useStyles.input}
                  name="message" // Added name attribute
                  required
                />
              </Box>
              {/* Hidden Input for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <Button
                fullWidth
                variant="contained"
                sx={useStyles.submitButton}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
