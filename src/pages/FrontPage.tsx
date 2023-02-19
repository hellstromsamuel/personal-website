import { Box, Typography } from "@mui/material";
import FrontPageChips from "../components/FrontPageChips";
import SocialMediaLinks from "../components/SocialMediaLinks";

const FrontPage = () => {
  return (
    <Box
      sx={{
        marginTop: "10vh",
        borderRadius: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor: "primary.main",
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
          rowGap: "10px",
          padding: "10px",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h2" color="text.primary">
          Samuel Hellstrøm
        </Typography>

        <SocialMediaLinks />

        <FrontPageChips />
      </div>
    </Box>
  );
};

export default FrontPage;
