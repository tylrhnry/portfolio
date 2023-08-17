import React from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from './components/BackToTopButton';
import { Padding } from '@mui/icons-material';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        // dark: "#ff",
        // contrastText: "#000",
      },
      secondary: {
        main: "#669999", // color of nav & footer
        light: "#82e9de",
        dark: "#00867d",
        // contrastText: "#000",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar/>
            <div style={{paddingTop: "4rem", flex: 1, }}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
            </div>
          <BackToTopButton/>
          <Footer/>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
