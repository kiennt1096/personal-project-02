import { Button } from "@mui/material";
import React from "react";

const ButtonCommon = ({ title, padding, fontSize, lineHeight }) => {
  return (
    <Button
      sx={{
        padding: padding ? padding : "8px 20px",
        textTransform: "none",
        color: "#FFF",
        background: "#2E80CE",
        borderRadius: "50px",
        lineHeight: lineHeight ? lineHeight : "28px",
        fontSize: fontSize ? fontSize : "16px",
        ":hover": {
          background: "#2E80CE",
          opacity: "0.9",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonCommon;
