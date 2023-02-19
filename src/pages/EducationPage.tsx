import { Typography } from "@mui/material";
import EducationCard from "../components/EducationCard";

const EducationPage = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="h2" color="text.primary" className="hidden">
        Høyere utdanning
      </Typography>
      <div className="elements">
        <EducationCard
          place="🇳🇴 Universitetet i Oslo (UiO)"
          title="Master, Informatikk: digital økonomi og ledelse"
          timespan="aug. 2022 - jun. 2024"
        />
        <EducationCard
          place="🇺🇸 Boston University: Questroom School of Business"
          title="Norwegian School of Entrepreneurship (graduate level)"
          timespan="jun. 2022 - aug. 2022"
        />
        <EducationCard
          place="🇳🇴 Universitetet i Oslo (UiO)"
          title="Gründerskolen: sommerprogram i entreprenørskap (30 studiepoeng)"
          timespan="jan. 2022 - aug. 2022"
        />
        <EducationCard
          place="🇳🇴 Universitetet i Oslo (UiO)"
          title="Bachelor, Informatikk: digital økonomi og ledelse"
          timespan="aug. 2019 - jun. 2022"
        />
      </div>
    </div>
  );
};

export default EducationPage;
