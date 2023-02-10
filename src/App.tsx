import "./styles/App.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

import { useRef, useState } from "react";
import "@fontsource/montserrat";
import TopBar from "./components/TopBar";
import DarkFadeFullScrenn from "./components/DarkFadeFullScreen";
import FrontPage from "./pages/FrontPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <div ref={containerRef} className="App">
        <DarkFadeFullScrenn isDarkMode={isDarkMode} />
        <TopBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

        <div className="bg" id="FrontPage">
          <FrontPage />
        </div>

        <div className="bg" id="EducationPage">
          <EducationPage />
        </div>

        <div className="bg" id="ProjectsPage">
          <ProjectsPage />
        </div>

        <div className="bg" id="ContactPage">
          <ContactPage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
