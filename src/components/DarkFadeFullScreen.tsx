const DarkFadeFullScrenn = (props: { isDarkMode: boolean }) => {
  return (
    <div
      style={{
        zIndex: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        opacity: props.isDarkMode ? "0.70" : "0.2",
        position: "fixed",
        transition: "0.6s",
      }}
    ></div>
  );
};

export default DarkFadeFullScrenn;
