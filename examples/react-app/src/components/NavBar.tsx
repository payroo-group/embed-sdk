import { Link, useLocation } from "react-router";
import styles from "./NavBar.module.css";

const navItems = [
  {
    label: "Payruns",
    to: "/payruns",
    isActive: (pathname: string) => pathname.startsWith("/payruns"),
  },
  {
    label: "Employees",
    to: "/employees",
    isActive: (pathname: string) => pathname.startsWith("/employees"),
  },
  {
    label: "Settings",
    to: "/settings",
    isActive: (pathname: string) => pathname.startsWith("/settings"),
  },
];

function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.logoText}>Embedded Payroll Demo</span>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={
              item.isActive(pathname)
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={styles.profile}>SV</div>
    </header>
  );
}

export default NavBar;
