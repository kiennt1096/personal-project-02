import { Box, Typography } from "@mui/material";
import React from "react";
import MobileImage from "../../assets/mobile.png";
import GooglePlay from "../../assets/googleplay.svg";
import AppleStore from "../../assets/applestore.svg";

const Mobile = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ width: "1170px", marginLeft: "auto", marginRight: "auto" }}>
        <Box
          sx={{
            background: "#2E80CE",
            borderRadius: "4px",
            padding: "0px 70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "block",
              width: "284px",
              height: "522px",
              marginTop: "-95px",
              objectFit: "cover",
            }}
          >
            <img src={MobileImage} alt="mobile-image" />
          </Box>
          <Box
            maxWidth="586px"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
          >
            <Box maxWidth="510px" marginBottom="18px">
              <Typography
                color="#FFF"
                fontSize="50px"
                fontWeight="600"
                lineHeight="60px"
              >
                Take back your smile with dentures
              </Typography>
            </Box>
            <Typography
              color="#FFF"
              fontSize="18px"
              fontWeight="300"
              lineHeight="30px"
              sx={{
                marginBottom: "38px",
              }}
            >
              If you’re missing multiple teeth due to decay, injury, or the
              natural aging process, dentures might be the perfect solution.
            </Typography>
            <Box rowGap="28px">
              <img src={GooglePlay} alt="google-play" />
              <Box marginLeft="28px" display="inline-block">
                <img src={AppleStore} alt="google-play" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
