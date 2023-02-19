import { Chip } from "@mui/material";

const FrontPageChips = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "5px",
        rowGap: "5px",
      }}
    >
      <Chip
        sx={{
          backgroundColor: "rgba(37, 150, 190, 0.4)",
        }}
        label="Masterstudent DigØk"
      />
      <Chip
        sx={{ backgroundColor: "rgba(225,26,34, 0.4)" }}
        label="Plenumslærer (UiO)"
      />
      <Chip
        sx={{
          backgroundColor: "rgba(0, 183, 126, 0.4)",
        }}
        label="Utvikler"
      />
      <Chip
        sx={{
          backgroundColor: "rgba(89, 53, 140, 0.4)",
        }}
        label="Toppidrettsutøver"
      />
    </div>
  );
};

export default FrontPageChips;
