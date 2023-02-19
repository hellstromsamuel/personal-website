import "../styles/DownButton.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const buttonStyle = {
  height: "50px",
  width: "50px",
  color: "text.primary",
};

interface Props {
  scrollDirection: string;
}

const DownButton = (props: Props) => {
  return (
    <div className="DownButton hidden">
      <IconButton
        onClick={() => {
          document.getElementById(props.scrollDirection)?.scrollIntoView();
        }}
      >
        {props.scrollDirection === "FrontPage" ? (
          <ArrowUpward sx={buttonStyle} />
        ) : (
          <ArrowDownward sx={buttonStyle} />
        )}
      </IconButton>
    </div>
  );
};

export default DownButton;
