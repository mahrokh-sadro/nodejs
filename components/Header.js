import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <spam>webDev</spam> News
      </h1>
      <p className={headerStyles.description}>
        keep up to data with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
