import "./App.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";

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
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
