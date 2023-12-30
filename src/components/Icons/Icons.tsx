import styles from "./Icons.module.scss";
import data from "data.json";

interface IconsProps {
  subject: string;
}

export const Icons = ({ subject }: IconsProps) => {
  const subjectIconPath =
    subject &&
    data.quizzes.filter((element) => element.title === subject)[0].icon;
  const iconBackground = subject.toLowerCase();

  return (
    <div className={`${styles.icons} ${styles[iconBackground]}`}>
      <img src={subjectIconPath} alt="" />
    </div>
  );
};
