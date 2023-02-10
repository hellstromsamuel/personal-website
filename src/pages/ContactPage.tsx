import { Typography } from "@mui/material";
import DownButton from "../components/DownButton";

const ContactPage = () => {
  return (
    <div className="PageContent">
      <Typography variant="h1" sx={{ marginTop: "12vh" }}>
        Kontakt
      </Typography>
      <div
        style={{
          marginTop: "auto",
        }}
      >
        <DownButton scrollDirection="FrontPage" />
      </div>
    </div>
  );
};

export default ContactPage;
