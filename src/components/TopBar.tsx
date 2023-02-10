import { Button, Link } from "@mui/material";
import styled from "@emotion/styled";
import DarkModeToggle from "react-dark-mode-toggle";

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
  paddingLeft: "20px",
  paddingRight: "20px",
  transition: "0.4s",
  "&:hover": {
    background: "black",
    color: "white",
  },
});

const TopBar = (props: TopBarProps) => {
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
        <TopBarButton>
          <Link
            sx={{
              textDecoration: "underline",
              color: "black",
              "&:hover": { color: "white" },
            }}
            href="https://www.linkedin.com/in/samuel-hellstrom/"
          >
            CV
          </Link>
        </TopBarButton>
        <TopBarButton>Kontakt</TopBarButton>
      </div>
    </div>
  );
};

export default TopBar;
