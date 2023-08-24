import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import ButtonCommon from "../public/ButtonCommon";
import DentistCard from "../public/DentistCard";
import DentistImage from "../../assets/dentist.png";
import FabIcon from "../public/FabIcon";

const Dentist = () => {
  return (
    <Box sx={{ width: "100%", background: "#FFF", padding: "170px 0 85px" }}>
      <Box
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          color="#10375C"
          fontSize="50px"
          fontWeight="600"
          lineHeight="60px"
          letterSpacing="-1px"
        >
          Our virtual dentist
        </Typography>
        <Box margin="38px 0 70px">
          <ButtonCommon
            title="Meet our dentist"
            fontSize="18px"
            padding="15px 26px"
            lineHeight="30px"
          />
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="38px"
        >
          <DentistCard
            image={DentistImage}
            dentistName="Dr. Essence Page"
            universty="DDS, California - Linda University"
          />
          <DentistCard
            image={DentistImage}
            dentistName="Dr. Essence Page"
            universty="DDS, California - Linda University"
          />
          <DentistCard
            image={DentistImage}
            dentistName="Dr. Essence Page"
            universty="DDS, California - Linda University"
          />
          <DentistCard
            image={DentistImage}
            dentistName="Dr. Essence Page"
            universty="DDS, California - Linda University"
          />
        </Box>
        <Box display="flex" gap="18px">
          <FabIcon
            icons={
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1L0.5 6L5.5 11"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            }
          />
          <FabIcon
            icons={
              <svg
                rotate="180deg"
                class="control-next-icon"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1L0.5 6L5.5 11"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dentist;
