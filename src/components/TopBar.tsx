import { Button, Link } from "@mui/material";
import styled from "@emotion/styled";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

interface TopBarProps {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const TopBarButton = styled(Button)({
  border: "2px solid black",
  background: "white",
  color: "black",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  marginRight: "10px",
  fontWeight: 700,
  borderRadius: "50px",
  paddingLeft: "15px",
  paddingRight: "15px",
  transition: "0.4s",
  "&:hover": {
    background: "black",
    color: "white",
  },
});

const TopBar = (props: TopBarProps) => {
  const [openContactDialog, setOpenContactDialog] = useState<boolean>(false);

  const themeToggler = () => {
    props.isDarkMode === false
      ? props.setDarkMode(true)
      : props.setDarkMode(false);
  };

  return (
    <div className="TopBar">
      <DarkModeToggle
        onChange={() => themeToggler()}
        checked={props.isDarkMode}
        size={80}
      />

      <div style={{ marginLeft: "auto" }}>
        {/* TODO: add link to CV pdf - LinkedIn */}
        <TopBarButton>
          <Link
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": { color: "white" },
            }}
            href="https://www.linkedin.com/in/samuel-hellstrom/"
          >
            CV (PDF)
          </Link>
        </TopBarButton>
        <TopBarButton onClick={() => setOpenContactDialog(true)}>
          Kontakt
        </TopBarButton>
      </div>

      <ContactDialog open={openContactDialog} setOpen={setOpenContactDialog} />
    </div>
  );
};

export default TopBar;
