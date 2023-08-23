import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonCommon from "../public/ButtonCommon";
import HeroImage1 from "../../assets/heroimg1.png";
import HeroImage2 from "../../assets/heroimg2.png";

const Hero = () => {
  return (
    <Box
      sx={{
        background: "#10375C",
        width: "100%",
        height: `calc(100vh - 104px)`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box maxWidth="44%">
          <Box marginBottom="22px">
            <Typography
              color="#FFF"
              fontSize="70px"
              fontWeight="600"
              lineHeight="80px"
              letterSpacing="-1.4px"
            >
              Exceptional dental care for all ages.
            </Typography>
          </Box>
          <Box marginBottom="38px">
            <Typography
              color="#C9D2DA"
              fontSize="18px"
              fontWeight="300"
              lineHeight="30px"
            >
              Exceptional dental care for all ages. Your great smile begins with
              a great dentist.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ButtonCommon
              title="Book Outline"
              padding="15px 46px"
              lineHeight="30px"
              fontSize="16px"
            />
            <Box marginLeft="28px">
              <Typography
                fontSize="18px"
                fontWeight="400"
                lineHeight="30px"
                color="#FFF"
              >
                or call (123) 456-7890
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flexGrow="1">
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <img
              src={HeroImage1}
              alt="HeroImage1"
              style={{ position: "relative", marginRight: "-6px" }}
            />
            <img src={HeroImage2} alt="HeroImage2" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
