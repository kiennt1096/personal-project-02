import { Box, Typography } from "@mui/material";
import React from "react";

const DentistCard = ({ image, dentistName, universty }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box
        paddingTop="28px"
        borderRadius="6px"
        overflow="hidden"
        marginBottom="12px"
        sx={{
          background: "#EAF6FF",
        }}
      >
        <Box
          sx={{
            display: "block",
            maxWidth: "100%",
            height: "290px",
            objectFit: "cover",
            transition: "0.25s",
          }}
        >
          <img src={image} alt={dentistName} />
        </Box>
      </Box>
      <Typography
        color="#10375C"
        fontSize="16px"
        lineHeight="28px"
        fontWeight="400"
      >
        {dentistName}
      </Typography>
      <Typography
        color="#575F66"
        fontSize="14px"
        lineHeight="26px"
        fontWeight="300"
      >
        {universty}
      </Typography>
    </Box>
  );
};

export default DentistCard;
