import { IconButton, Link, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

interface Props {
  textColor: string;
  backgroundColor: string;
}

const SocialMediaLinks = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
        textAlign: "center",
      }}
    >
      <Link
        href="mailto: hellstromsamuel@gmail.com"
        sx={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ color: "#e04c3c" }}>
          <Email sx={{ height: "30px", width: "30px" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "12px",
            textDecoration: "underline",
            color: props.textColor,
          }}
        >
          Email
        </Typography>
      </Link>
      <Link
        href="https://www.linkedin.com/in/samuel-hellstrom/"
        sx={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton>
          <LinkedIn sx={{ height: "30px", width: "30px", color: "#0072b1" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "12px",
            textDecoration: "underline",
            color: props.textColor,
          }}
        >
          LinkedIn
        </Typography>
      </Link>
      <Link
        href="https://github.com//hellstromsamuel"
        sx={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton>
          <GitHub sx={{ height: "30px", width: "30px", color: "#171515" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "12px",
            textDecoration: "underline",
            color: props.textColor,
          }}
        >
          GitHub
        </Typography>
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
