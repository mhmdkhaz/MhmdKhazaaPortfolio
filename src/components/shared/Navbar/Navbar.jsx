import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import navStyles from "./Navbar.styles";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { item: "Home", href: "#hero" },
    { item: "About", href: "#about" },
    { item: "Skills", href: "#skills" },
    { item: "Work", href: "#work" },
  ];

  // Function to scroll to the target section with an offset of -200px
  const scrollToWithOffset = (id, offset = 100) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <Box sx={navStyles.root}>
      <Box sx={navStyles.navbarContainer}>
        {/* Logo */}
        <Box component="img" sx={navStyles.logo} src={Logo} alt="Logo" />

        {/* Desktop Navigation */}
        <Box sx={navStyles.navWrapper}>
          <Box sx={navStyles.slidingBackground(activeIndex, navItems.length)} />
          {navItems.map((item, index) => (
            <Button
              key={item.item}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                setActiveIndex(index);
                scrollToWithOffset(item.href, 200);
              }}
              sx={navStyles.navButton(activeIndex === index)}
            >
              <a
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.item}
              </a>
            </Button>
          ))}
        </Box>

        {/* Contact Button */}
        <Button
          href="#contact"
          variant="contained"
          sx={navStyles.contactButton}
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("contact", 200);
          }}
        >
          Contact Me
        </Button>

        {/* Mobile Menu Toggle */}
        <IconButton
          sx={navStyles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <CloseIcon sx={{ color: "#fff" }} />
          ) : (
            <MenuIcon sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </Box>

      {/* Mobile Menu */}
      {menuOpen && (
        <Box sx={navStyles.mobileMenu}>
          {navItems.map((item, index) => (
            <Button
              key={item.item}
              onClick={() => {
                setActiveIndex(index);
                setMenuOpen(false);
                scrollToWithOffset(item.href, 200);
              }}
              sx={navStyles.mobileNavButton(activeIndex === index)}
            >
              {item.item}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
