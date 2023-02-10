import { Typography } from "@mui/material";
import DownButton from "../components/DownButton";

const ProjectsPage = () => {
  return (
    <div className="PageContent">
      <Typography variant="h1" sx={{ marginTop: "12vh" }}>
        Prosjekter
      </Typography>
      <div style={{ marginTop: "auto" }}>
        <DownButton scrollDirection="ContactPage" />
      </div>
    </div>
  );
};

export default ProjectsPage;
