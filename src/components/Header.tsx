// import { Image } from "astro:assets";
// import headerLogo from "../images/header-logo.png";
// import hamburger from "../images/hamburger.png";
import { useStore } from "@nanostores/preact";
import styles from "./Header.module.css";
import { isToggleOpen } from "../toggle";

export const Header = () => {
  const $isToggleOpen = useStore(isToggleOpen);

  const handleToggle = () => {
    isToggleOpen.set(!$isToggleOpen);
  };

  return (
    <header className={styles.header}>
      <h1>
        <a href="/">
          <img src="/images/header-logo.png" alt="Logo" />
        </a>
      </h1>
      <button className={styles.button} onClick={handleToggle}>
        <img src="/images/hamburger.png" alt="menu" />
      </button>
    </header>
  );
};
