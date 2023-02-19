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
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: "primary.main",
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
