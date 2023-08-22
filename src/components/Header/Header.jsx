import { Box, Link, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.svg";
import HeaderLink from "../public/HeaderLink";
import ButtonCommon from "../public/ButtonCommon";

const Header = () => {
  return (
    <Box
      sx={{
        background: "#10375C",
      }}
    >
      <Box
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        padding="30px 0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={Logo} alt="logo" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="end"
            marginLeft="6px"
          >
            <Typography
              color="#fff"
              fontSize="18px"
              lineHeight="14px"
              fontWeight="400"
            >
              shine
            </Typography>
            <Typography
              color="#fff"
              fontSize="12px"
              lineHeight="14px"
              fontWeight="300"
            >
              smile
            </Typography>
          </Box>
        </Box>
        <Box>
          <HeaderLink title="Home" link="#!" active={true} />
          <HeaderLink title="Services" link="#!" />
          <HeaderLink title="About" link="#!" />
          <HeaderLink title="Doctors" link="#!" />
        </Box>
        <Box>
          <HeaderLink title="Log In" link="#!" marginRight="28px" />
          <ButtonCommon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
