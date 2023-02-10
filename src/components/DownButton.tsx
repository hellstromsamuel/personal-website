import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const buttonStyle = {
  height: "50px",
  width: "50px",
  padding: "5px",
  color: "black",
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  border: "2px solid black",
  borderRadius: "50px",
  transition: "0.4s",
  "&:hover": {
    background: "black",
    color: "white",
  },
};

const DownButton = (props: { scrollDirection: string }) => {
  return (
    <div className="DownButton">
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
