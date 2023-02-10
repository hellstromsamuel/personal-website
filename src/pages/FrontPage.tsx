import "./../styles/FrontPage.css";
import DownButton from "../components/DownButton";

const FrontPage = () => {
  return (
    <div
      className="PageContent"
      style={{
        justifyContent: "flex-end",
      }}
    >
      <span className="Name">Samuel</span>
      <span className="Name">Hellstrøm</span>

      <DownButton scrollDirection="EducationPage" />
    </div>
  );
};

export default FrontPage;
