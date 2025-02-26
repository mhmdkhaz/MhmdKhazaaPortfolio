import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { styles } from "./Skills.styles";
// start in assets
import html from "../../../assets/skills/html.svg";
import css from "../../../assets/skills/css3.svg";
import js from "../../../assets/skills/javascript.svg";
import react from "../../../assets/skills/react.svg";
import redux from "../../../assets/skills/redux.svg";
import tailwindCss from "../../../assets/skills/tailwind.svg";
import bootstrap from "../../../assets/skills/bootstrap.svg";
import Axios from "../../../assets/skills/Axios.png";
import git from "../../../assets/skills/git.svg";
import zustand from "../../../assets/skills/zustand.svg";
import query from "../../../assets/skills/query.png";
import mui from "../../../assets/skills/mui.svg";

const tools = [
  { name: "HTML", description: "Structure web content", img: html },
  { name: "CSS", description: "User Interface", img: css },
  { name: "JavaScript", description: "Interaction", img: js },
  { name: "React", description: "Framework", img: react },
  { name: "redux", description: "JS Library", img: redux },
  { name: "tailwindCss", description: "CSS Framework", img: tailwindCss },
  { name: "bootstrap", description: "CSS library", img: bootstrap },
  { name: "Axios", description: "Simplifies API requests", img: Axios },
  { name: "git", description: "Version Control System", img: git },
  {
    name: "Zustand",
    description: "State management library",
    img: zustand,
  },
  {
    name: "React Query",
    description: "Data fetching  library",
    img: query,
  },
  {
    name: "MUI",
    description: "React library",
    img: mui,
  },
];

const Skills = () => {
  return (
    <Box id="skills">
      <Container maxWidth="lg">
        <Box sx={styles.container}>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="left"
            sx={styles.title}
          >
            Essential Tools I Use
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            gutterBottom
            sx={styles.subtitle}
          >
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={styles.gridContainer}
          >
            {tools.map((tool, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={styles.card}>
                  <Box component="figure" sx={styles.figure}>
                    <Box component="img" src={tool.img} sx={styles.img} />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={styles.toolName}>
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" sx={styles.toolDescription}>
                      {tool.description}
                    </Typography>
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

export default Skills;
