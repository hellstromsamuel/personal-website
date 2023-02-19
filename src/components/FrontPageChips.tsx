import { Chip } from "@mui/material";

interface Props {
  textColor: string;
}

const FrontPageChips = (props: Props) => {
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
          color: props.textColor,
        }}
        label="Masterstudent DigØk"
      />
      <Chip
        sx={{ backgroundColor: "rgba(225,26,34, 0.4)", color: props.textColor }}
        label="Plenumslærer (UiO)"
      />
      <Chip
        sx={{
          backgroundColor: "rgba(0, 183, 126, 0.4)",
          color: props.textColor,
        }}
        label="Utvikler / Gründer"
      />
      <Chip
        sx={{
          backgroundColor: "rgba(89, 53, 140, 0.4)",
          color: props.textColor,
        }}
        label="Toppidrettsutøver"
      />
    </div>
  );
};

export default FrontPageChips;
