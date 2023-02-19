import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import "@fontsource/montserrat";
import TopBar from "./components/TopBar";
import FrontPage from "./pages/FrontPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import DownButton from "./components/DownButton";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          transition: "1s",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <TopBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

        <section id="FrontPage">
          <FrontPage />
          <DownButton scrollDirection="EducationPage" />
        </section>

        <section id="EducationPage">
          <EducationPage />
          <DownButton scrollDirection="ProjectsPage" />
        </section>

        <section id="ProjectsPage">
          <ProjectsPage />
          <DownButton scrollDirection="FrontPage" />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
