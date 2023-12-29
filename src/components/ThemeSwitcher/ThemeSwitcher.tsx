import styles from "./ThemeSwitcher.module.scss";
import { ReactComponent as MoonDarkIcon } from "../../assets/images/icon-moon-dark.svg";
import { ReactComponent as MoonLightIcon } from "../../assets/images/icon-moon-light.svg";
import { ReactComponent as SunDarkIcon } from "../../assets/images/icon-sun-dark.svg";
import { ReactComponent as SunLightIcon } from "../../assets/images/icon-sun-light.svg";
import { useEffect, useState } from "react";

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const currentTheme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={styles.themeSwitcherWrapper}>
      <label className={styles.themeSwitcher}>
        {isDark ? (
          <SunLightIcon className={styles.sunIcon} />
        ) : (
          <SunDarkIcon className={styles.sunIcon} />
        )}
        <input
          type="checkbox"
          className={styles.input}
          checked={isDark}
          onChange={toggleDarkMode}
        />
        <span className={styles.slider}></span>
        {isDark ? (
          <MoonLightIcon className={styles.moonIcon} />
        ) : (
          <MoonDarkIcon className={styles.moonIcon} />
        )}
      </label>
    </div>
  );
};
