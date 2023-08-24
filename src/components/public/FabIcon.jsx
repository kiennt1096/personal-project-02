import { Box } from "@mui/material";
import React from "react";

const FabIcon = ({ icons }) => {
  return (
    <Box
      sx={{
        height: "36px",
        width: "36px",
        background: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        border: "1px solid #575F66",
        ":hover": {
          background: "#2E80CE",
          border: "1px solid #2E80CE",
        },
      }}
    >
      {icons}
    </Box>
  );
};

export default FabIcon;
