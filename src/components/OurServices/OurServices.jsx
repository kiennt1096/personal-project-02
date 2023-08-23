import { Box, Typography } from "@mui/material";
import React from "react";
import Service from "../../assets/services.png";
import ServiceCard from "../public/ServiceCard";
import ButtonCommon from "../public/ButtonCommon";

const OurServices = () => {
  return (
    <Box
      sx={{
        background: "#FFF",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1170px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          padding: "170px 0",
          flexDirection: "column",
        }}
      >
        <Typography
          color="#10375C"
          fontSize="50px"
          fontWeight="600"
          lineHeight="50px"
          letterSpacing="-1px"
          sx={{
            marginBottom: "18px",
          }}
        >
          Our services
        </Typography>
        <Box maxWidth="468px" marginBottom="70px">
          <Typography
            color="#575F66"
            fontSize="18px"
            fontWeight="300"
            lineHeight="30px"
            textAlign="center"
          >
            Exceptional dental care for all ages. Your great smile begins with a
            great dentist.
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box>
            <img src={Service} alt=" service" />
          </Box>
          <Box>
            <Box marginBottom="55px">
              <ServiceCard
                title="Oral Surgery"
                subtitle="Everything you expect and then some. Cleanings, fillings, and
              x-rays."
              />
              <ServiceCard
                title="Wisdom Teeth Removal"
                subtitle="Everything you expect and then some. Cleanings, fillings, and x-rays."
              />
              <ServiceCard
                title="Preventative Dentistry"
                subtitle="Everything you expect and then some. Cleanings, fillings, and x-rays."
              />
            </Box>
            <Box>
              <ButtonCommon
                title="All Services"
                padding="15px 48px"
                fontSize="18px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
