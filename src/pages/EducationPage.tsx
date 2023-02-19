import { Typography } from "@mui/material";
import EducationCard from "../components/EducationCard";

const EducationPage = () => {
  return (
    <div className="PageContent">
      <Typography variant="h1" color="text.primary" sx={{ marginTop: "10vh" }}>
        Utdanning
      </Typography>

      <div
        style={{
          flexGrow: 1,
          marginTop: "10px",
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
          description="Masterprogram i informatikk med forrettningsmessig spesialisering."
        />
      </div>
    </div>
  );
};

export default EducationPage;
