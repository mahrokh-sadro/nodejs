import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        Layout
        <main className={styles.main}>
          layout component
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
