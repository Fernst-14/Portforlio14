// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from "../Context/LanguageContext";
function Navbav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage(); // Access the language and toggleLang function

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#certificate">Certificate</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
        <ul>
            {/* 🔁 Language Switcher */}
          <li>
            <button
              onClick={toggleLang}
              className={styles.langButton} // ใช้คลาส CSS ที่คุณสร้างไว้
            >
              {lang === "en" ? "TH" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbav;
