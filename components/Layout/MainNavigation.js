import { useState } from "react";
import Link from "next/link";

import styles from "../../styles/MainNavigation.module.css";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo} onClick={() => setIsOpen(false)}>
            Le
            <br />
            Petit Cottage
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                The Cottage
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/booking">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Booking
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            {/* Location */}
            <Link href="/">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Location
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/localArea">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Local Area
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/gallery">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Gallery
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/">
              <a className={styles.navlink} onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default MainNavigation;
