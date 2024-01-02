import { ThemeSwitcher } from "components/ThemeSwitcher";
import styles from "./Header.module.scss";
import { Icons } from "components/Icons";

interface HeaderProps {
  subject: string;
}

export const Header = ({ subject }: HeaderProps) => {
  return (
    <div className={styles.header}>
      {subject && (
        <div className={styles.headerSubject}>
          <Icons subject={subject} />
          <p className={styles.headerSubject}>{subject}</p>
        </div>
      )}
      <div className={styles.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
