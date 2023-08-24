import "./App.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/OurServices";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TakeBack from "./components/TakeBack/TakeBack";
import Dentist from "./components/Dentist/Dentist";
import Mobile from "./components/Mobile/Mobile";
import LastNews from "./components/LastestNews/LastNews";
import Appointment from "./components/Appoinrment/Appointment";

const THEME = createTheme({
  typography: {
    fontFamily: `"Sora", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className="content">
          <Header />
          <Hero />
          <OurServices />
          <HowItWorks />
          <TakeBack />
          <Dentist />
          <Mobile />
          <LastNews />
          <Appointment />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
