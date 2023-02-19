import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          transition: "1s",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <TopBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

        <section id="FrontPage" className="hidden">
          <FrontPage />
          <DownButton scrollDirection="EducationPage" />
        </section>

        <section id="EducationPage" className="hidden">
          <EducationPage />
          <DownButton scrollDirection="ProjectsPage" />
        </section>

        <section id="ProjectsPage" className="hidden">
          <ProjectsPage />
          <DownButton scrollDirection="FrontPage" />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
