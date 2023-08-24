import { Box, Link, Typography } from "@mui/material";
import React from "react";
import FabIcon from "../public/FabIcon";
import NewsCard from "../public/NewsCard";
import NewsImage from "../../assets/news1.png";

const LastNews = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "170px",
      }}
    >
      <Box
        sx={{
          width: "1170px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" columnGap="28px">
          <Typography
            color="#10375C"
            fontSize="50px"
            fontWeight="600"
            lineHeight="60px"
            letterSpacing="-1px"
            sx={{ maxWidth: "470px" }}
          >
            Read Latest News & Events.
          </Typography>
          <Link
            sx={{
              color: "#10375C",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "28px",
            }}
          >
            Read All Blog
          </Link>
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
        <Box display="flex" gap="30px">
          <NewsCard
            img={NewsImage}
            title="Key Considerations for Regulatory Compliant."
            subtitle="It’s easy to think about medical care from a narrow perspective. You go to the hospital."
          />
          <NewsCard
            img={NewsImage}
            title="Key Considerations for Regulatory Compliant."
            subtitle="It’s easy to think about medical care from a narrow perspective. You go to the hospital."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LastNews;
