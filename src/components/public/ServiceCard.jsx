import { Box, Typography } from "@mui/material";
import React from "react";
import Tooth from "../../assets/tooth.svg";

const ServiceCard = ({ title, subtitle }) => {
  return (
    <Box width="470px">
      <Box
        padding="22px"
        display="flex"
        borderRadius="10px"
        sx={{
          background: "#FFF",
          transition: "0.25s",
          ":hover": {
            boxShadow: "0px 14px 28px 0px rgba(0, 0, 0, 0.05)",
            position: "relative",
          },
          ":hover .inner-box": {
            background: "#2E80CE",
          },
        }}
      >
        <Box
          className="inner-box"
          sx={{
            background: "#EFF6FD",
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            flexShrink: "0",
            marginRight: "19px",
          }}
        >
          <Box padding="18px">
            <img src={Tooth} alt="tooth" />
          </Box>
        </Box>
        <Box>
          <Typography color="#10375C" fontSize="18px" fontWeight="600">
            {title}
          </Typography>
          <Typography
            color="#575F66"
            fontSize="16px"
            fontWeight="300"
            lineHeight="28px"
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
