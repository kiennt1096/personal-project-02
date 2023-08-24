import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonCommon from "../public/ButtonCommon";

const Appointment = () => {
  return (
    <Box margin="170px 0" sx={{ width: "100%", backgroundColor: "#FFF" }}>
      <Box
        sx={{
          width: "1170px",
          background: "#F6FBFF",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          padding="100px 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            color="#10375C"
            fontSize="50px"
            fontWeight="600"
            lineHeight="60px"
            sx={{
              position: "relative",
              paddingBottom: "20px",
              ":after": {
                position: "absolute",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "0 auto",
                display: "auto",
                content: '""',
                width: "136px",
                height: "2px",
                background: "#2e80ce",
              },
            }}
          >
            Always welcoming new patients
          </Typography>
          <Typography
            color="#575F66"
            fontSize="16px"
            fontWeight="300"
            lineHeight="28px"
            textAlign="center"
            sx={{
              maxWidth: "617px",
              margin: "18px auto 38px",
            }}
          >
            Take control of your dental health and get the personalized care you
            deserve. Call (541) 772-8846 to schedule
          </Typography>
          <ButtonCommon title="Appointment" padding="15px 40px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
