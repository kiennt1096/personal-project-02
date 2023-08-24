import { Box, Typography } from "@mui/material";
import React from "react";
import HowItWorkCard from "../public/HowItWorkCard";
import HowItWork1 from "../../assets/howitworks1.svg";
import HowItWork2 from "../../assets/howitworks2.svg";
import HowItWork3 from "../../assets/howitworks3.svg";

const HowItWorks = () => {
  return (
    <Box
      sx={{
        background: "#F6FBFF",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: "100px 0",
          maxWidth: "1170px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          color="#10375C"
          fontSize="50px"
          fontWeight="600"
          lineHeight="60px"
          letterSpacing="-1px"
          sx={{ marginBottom: "16px" }}
        >
          How it works
        </Typography>
        <Box maxWidth="468px" marginBottom="70px">
          <Typography
            color="#575F66"
            fontSize="18px"
            fontWeight="300"
            lineHeight="30px"
          >
            Exceptional dental care for all ages. Your great smile begins with a
            great dentist.
          </Typography>
        </Box>
        <Box maxWidth="100%" display="flex" justifyContent="space-between">
          <HowItWorkCard
            icon={HowItWork1}
            title="Search doctor"
            subtitle="Search a doctor by education, qualifications or experience-contact for inquiry."
          />
          <HowItWorkCard
            icon={HowItWork2}
            title="Find best doctor"
            subtitle="Search a doctor by education, qualifications or experience-contact for inquiry."
          />
          <HowItWorkCard
            icon={HowItWork3}
            title="Search doctor"
            subtitle="Search a doctor by education, qualifications or experience-contact for inquiry."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
