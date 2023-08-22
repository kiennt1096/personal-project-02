import { Button } from "@mui/material";
import React from "react";

const ButtonCommon = () => {
  return (
    <Button
      sx={{
        padding: "8px 20px",
        textTransform: "none",
        color: "#FFF",
        background: "#2E80CE",
        borderRadius: "22px",
        lineHeight: "28px",
        fontSize: "16px",
        ":hover": {
          background: "#2E80CE",
          opacity: "0.9",
        },
      }}
    >
      Sign Up
    </Button>
  );
};

export default ButtonCommon;
