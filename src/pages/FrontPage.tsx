import { Typography } from "@mui/material";
import FrontPageChips from "../components/FrontPageChips";
import SocialMediaLinks from "../components/SocialMediaLinks";

interface Props {
  textColor: string;
  backgroundColor: string;
}

const FrontPage = (props: Props) => {
  return (
    <div
      style={{
        marginTop: "10vh",
        borderRadius: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor:
          props.backgroundColor === "#ffffff" ? "white" : "rgba(35,35,35)",
        transition: "1s",
      }}
    >
      <img
        alt="Samuel Hellstrøm profilbilde"
        src={require("../img/samuel_hellstroem_wide.jpg")}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20px 20px 0px 0px",
        }}
      ></img>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          rowGap: "5px",
          padding: "10px",
        }}
      >
        <Typography variant="h2" sx={{ color: props.textColor }}>
          Samuel Hellstrøm
        </Typography>

        <SocialMediaLinks
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
        />

        <FrontPageChips textColor={props.textColor} />
      </div>
    </div>
  );
};

export default FrontPage;
