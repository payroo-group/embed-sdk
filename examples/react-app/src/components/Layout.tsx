import { Outlet } from "react-router";
import NavBar from "./NavBar";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <NavBar />

      <main className="main">
        <Outlet />
        <footer className={styles.footer}>
          <span>&copy;2025 Payroo Pty Ltd. All rights reserved.</span>
        </footer>
      </main>
    </>
  );
}
