import { Box, Link, Typography } from "@mui/material";
import React from "react";

const NewsCard = ({ img, title, subtitle }) => {
  return (
    <Box
      borderRadius="12px"
      overflow="hidden"
      flex="1"
      sx={{
        ":hover": {
          boxShadow: "0px 18px 50px 0px rgba(0, 0, 0, 0.05)",
        },
        ":hover .link": {
          color: "#2E80CE",
        },
      }}
    >
      <Box sx={{ height: "172px", width: "270px", overflow: "hidden" }}>
        <Box
          display="block"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <img src={img} alt="image" />
        </Box>
      </Box>
      <Box
        padding="18px 22px 21px"
        border="1px solid #e8ebee"
        borderTop="none"
        borderRadius="0 0 12px 12px"
        sx={{ background: "#FFF" }}
      >
        <Typography
          color="#10375C"
          fontSize="16px"
          fontWeight="600"
          lineHeight="26px"
          sx={{ maxWidth: "226px", marginBottom: "10px" }}
        >
          {title}
        </Typography>
        <Typography
          color="#575F66"
          fontSize="14px"
          fontWeight="300"
          lineHeight="24px"
          sx={{ maxWidth: "226px", marginBottom: "12px" }}
        >
          {subtitle}
        </Typography>
        <Link
          className="link"
          sx={{
            textDecoration: "none",
            color: "#10375C",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Learn More
        </Link>
      </Box>
    </Box>
  );
};

export default NewsCard;
