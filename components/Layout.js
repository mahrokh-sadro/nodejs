import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      Layout
      <main className={styles.main}>
        layout component
        {children}
      </main>
    </div>
  );
};

export default Layout;
