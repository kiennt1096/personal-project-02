import { Link } from "@mui/material";
import React from "react";

const HeaderLink = ({ title, active, link, marginRight }) => {
  return (
    <Link
      href={link}
      sx={{
        color: active ? "#FFF" : "#C9D2DA",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: active ? "400" : "300",
        lineHeight: "28px",
        marginRight: marginRight ? marginRight : "42px",
        ":nth-last-child": {
          marginRight: "0px",
        },
        ":before": {
          position: "relative",
          content: '""',
          top: "-2px",
          left: "-8px",
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "10px",
          background: "#FFF",
          opacity: active ? 1 : 0,
        },
        ":hover": {
          fontWeight: "400",
          color: "#FFF",
        },
      }}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
