import { Box, Typography } from "@mui/material";

interface EducationCardProps {
  place: string;
  title: string;
  timespan: string;
}

const EducationCard = (props: EducationCardProps) => {
  return (
    <Box
      className="element hidden"
      sx={{
        backgroundColor: "primary.main",
        textAlign: "left",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: "20px",
        padding: "10px 16px 10px 16px",
      }}
    >
      <Typography fontWeight={700} color="text.primary">
        {props.place}
      </Typography>

      <Typography color="text.secondary" sx={{ marginLeft: "auto" }}>
        {props.timespan}
      </Typography>
      <Typography color="text.primary">{props.title}</Typography>
    </Box>
  );
};

export default EducationCard;
