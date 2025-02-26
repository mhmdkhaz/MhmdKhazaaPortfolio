import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Container,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Styles } from "./Portfolio.styles";
import imdb from "../../../assets/portfolio/imdb.png";
import game from "../../../assets/portfolio/game.png";
import pulpo from "../../../assets/portfolio/plupo.png";
import salon from "../../../assets/portfolio/salon.png";
import aurora from "../../../assets/portfolio/aurora.png";
import dash from "../../../assets/portfolio/dash.png";

const projects = [
  {
    title: "Movix",
    image: imdb, // Replace with actual image URL
    description: ["React", "React Query", "Custom Hook "],
    link: "https://movix-mhmdkhaz.vercel.app/",
  },
  {
    title: "Gamer",
    image: game, // Replace with actual image URL
    description: ["React", "React Query", "Custom Hook"],
    link: "https://game-web-eta.vercel.app/pricing",
  },
  {
    title: "Plupo Software",
    image: pulpo, // Replace with actual image URL
    description: ["React", "Axios", "Redux"],
    link: "https://software.pulpo-tech.com/",
  },
  {
    title: "kapsalonzuidster",
    image: salon, // Replace with actual image URL
    description: ["React", "Axios", "Redux"],
    link: "https://www.kapsalonzuidster.nl/",
  },
  {
    title: "Aurora",
    image: aurora, // Replace with actual image URL
    description: ["React", "Axios", "Zustand"],
    link: "https://test.pulpo-tech.com/",
  },
  {
    title: "Dashboard",
    image: dash, // Replace with actual image URL
    description: ["Pure"],
    link: "https://mhmdkhaz.github.io/HugeDashboard/index.html",
  },
];

const Portfolio = () => {
  return (
    <Box id="work">
      <Container maxWidth="lg">
        <Box sx={Styles.container}>
          <Typography variant="h4" sx={Styles.title}>
            My portfolio highlights
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={Styles.card}>
                  <Box
                    component="figure"
                    width="100%"
                    height={320}
                    objectFit="cover"
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={Styles.image}
                    />
                  </Box>
                  <CardContent sx={Styles.cardContent}>
                    <Typography variant="h6" sx={Styles.cardTitle}>
                      {project.title}
                    </Typography>
                    <Box sx={Styles.Visit}>
                      <Box sx={Styles.techContainer}>
                        {project.description.map((tech, techIndex) => (
                          <Chip key={techIndex} label={tech} sx={Styles.chip} />
                        ))}
                      </Box>
                      <IconButton
                        href={project.link}
                        target="_blank"
                        sx={Styles.iconButton}
                      >
                        <CallMadeIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
