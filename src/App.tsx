import "./styles/App.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

import { useEffect, useState } from "react";
import "@fontsource/montserrat";
import TopBar from "./components/TopBar";
import FrontPage from "./pages/FrontPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import DownButton from "./components/DownButton";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [textColor, setTextColor] = useState<string>("#000000");

  useEffect(() => {
    if (isDarkMode) {
      setBackgroundColor("#000000");
      setTextColor("#ffffff");
    } else {
      setBackgroundColor("#ffffff");
      setTextColor("#000000");
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          transition: "1s",
          backgroundColor: backgroundColor,
        }}
      >
        <TopBar
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode}
          textColor={textColor}
          backgroundColor={backgroundColor}
        />

        <section id="FrontPage">
          <FrontPage textColor={textColor} backgroundColor={backgroundColor} />
          <DownButton scrollDirection="EducationPage" />
        </section>

        <section id="EducationPage">
          <EducationPage />
        </section>

        <div className="bg" id="ProjectsPage">
          <ProjectsPage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
