import { Typography } from "@mui/material";
import DownButton from "../components/DownButton";
import EducationCard from "../components/EducationCard";

const EducationPage = () => {
  return (
    <div className="PageContent">
      <Typography variant="h1" sx={{ marginTop: "12vh" }}>
        Utdanning
      </Typography>

      <div
        style={{
          flexGrow: 1,
          width: "80%",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "30px",
        }}
      >
        <EducationCard
          img={require("./../img/uio.jpg")}
          title="Master's degree, Informatikk: digital økonomi og ledelse"
          timespan="jul. 2022 - jun. 2024"
          description="          Masterprogrammet tar for seg samspillet mellom avanserte tekniske
          løsninger og forretningsmessig innovasjon. Dyp teknisk teknologisk
          kunnskap og innsikt i hvordan digitalisering endrer
          forretningsmodeller og organisasjoner."
        />
      </div>

      <div style={{ marginTop: "auto" }}>
        <DownButton scrollDirection="ProjectsPage" />
      </div>
    </div>
  );
};

export default EducationPage;
