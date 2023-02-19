// import { Button, Link } from "@mui/material";
import DarkModeToggle from "react-dark-mode-toggle";

interface TopBarProps {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

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

      {/* TODO: */}
      {/* <div style={{ marginLeft: "auto" }}>
        <Button
          sx={{
            border: `1px solid ${theme.palette.text.primary}`,
            backgroundColor: "background.default",
            fontWeight: 700,
            borderRadius: "50px",
            paddingLeft: "15px",
            paddingRight: "15px",
            transition: "0.4s",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Link
            sx={{
              color: "text.primary",
              textDecoration: "none",
            }}
            href="https://www.linkedin.com/in/samuel-hellstrom/"
          >
            CV (PDF)
          </Link>
        </Button>
      </div> */}
    </div>
  );
};

export default TopBar;
