import { Box, Link, Typography } from "@mui/material";
import React from "react";

const HowItWorkCard = ({ icon, title, subtitle }) => {
  return (
    <Box
      width="250px"
      border="16px solid #eaf6ff"
      padding="44px"
      borderRadius="4px"
      sx={{
        transition: "0.25s",
        ":hover": {
          transform: "translateY(-16px)",
          borderColor: "#2e80ce",
        },
        ":hover .hover-link": {
          color: "#2E80CE",
        },
      }}
    >
      <Box marginBottom="18px">
        <img src={icon} alt="" />
      </Box>
      <Box marginBottom="28px">
        <Typography
          color="#10375C"
          fontSize="26px"
          fontWeight="600"
          lineHeight="36px"
        >
          {title}
        </Typography>
      </Box>
      <Box marginBottom="18px">
        <Typography
          color="#575F66"
          fontSize="16px"
          fontWeight="300"
          lineHeight="28px"
        >
          {subtitle}
        </Typography>
      </Box>
      <Link
        className="hover-link"
        sx={{
          textDecoration: "none",
          color: "#575F66",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "28px",
          cursor: "pointer",
        }}
      >
        Learn More
      </Link>
    </Box>
  );
};

export default HowItWorkCard;
