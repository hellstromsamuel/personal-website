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
    <div className="TopBar hidden">
      <DarkModeToggle
        onChange={() => themeToggler()}
        checked={props.isDarkMode}
        size={80}
      />
    </div>
  );
};

export default TopBar;
