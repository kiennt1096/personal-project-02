import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonCommon from "../public/ButtonCommon";
import TakeBack1 from "../../assets/takeback1.png";
import TakeBack2 from "../../assets/takeback2.png";
import { Height } from "@mui/icons-material";

const TakeBack = () => {
  return (
    <Box
      sx={{
        background: "#FFF",
        width: "100%",
      }}
    >
      <Box
        sx={{
          paddingTop: "170px",
          maxWidth: "1170px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "130px",
        }}
      >
        <Box maxWidth="48%">
          <Box
            sx={{
              position: "relative",
              padding: "0 58px 121px 0;",
            }}
          >
            <img
              src={TakeBack1}
              alt="takeBack1"
              style={{
                width: "512px",
                height: "370px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
            <img
              src={TakeBack2}
              alt="takeBack2"
              style={{
                width: "322px",
                height: "370px",
                borderRadius: "6px",
                objectFit: "cover",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            color="#10375C"
            fontSize="58px"
            fontWeight="600"
            lineHeight="60px"
            letterSpacing="-2px"
            sx={{ marginBottom: "18px" }}
          >
            Take back your smile with shine.
          </Typography>
          <Typography
            color="#575F66"
            fontSize="18px"
            fontWeight="300"
            lineHeight="30px"
            sx={{ marginBottom: "38px" }}
          >
            If you’re missing multiple teeth due to decay, injury, or the
            natural aging process, dentures might be the perfect solution.
          </Typography>
          <ButtonCommon
            title="Learn More"
            padding="15px 52px"
            fontSize="18px"
            lineHeight="30px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TakeBack;
