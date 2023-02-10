import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

interface EducationCardProps {
  img: any;
  title: string;
  timespan: string;
  description: string;
}

const EducationCard = (props: EducationCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "600px",
        textAlign: "left",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="UiO logo"
      />
      <Divider />
      <CardContent>
        <Typography fontWeight={700}>Universitetet i Oslo (UiO)</Typography>
        <Typography>{props.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.timespan}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
