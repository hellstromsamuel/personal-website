import { Button, Link } from "@mui/material";
import DarkModeToggle from "react-dark-mode-toggle";

interface TopBarProps {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  textColor: string;
  backgroundColor: string;
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

      <div style={{ marginLeft: "auto" }}>
        {/* TODO: add link to CV pdf (not LinkedIn) */}
        <Button
          sx={{
            border: "2px solid " + props.textColor,
            fontWeight: 700,
            borderRadius: "50px",
            paddingLeft: "15px",
            paddingRight: "15px",
            transition: "0.4s",
            backgroundColor: props.backgroundColor,
          }}
        >
          <Link
            sx={{
              color: props.textColor,
              textDecoration: "none",
            }}
            href="https://www.linkedin.com/in/samuel-hellstrom/"
          >
            CV (PDF)
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
