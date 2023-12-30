import { Icons } from "components/Icons";
import styles from "./WelcomePage.module.scss";
import data from "data.json";

interface WelcomePageProps {
  userChoise: string;
  onRadioButton: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WelcomePage = ({
  userChoise,
  onRadioButton,
}: WelcomePageProps) => {
  return (
    <div className={styles.welcomePage}>
      <div className={styles.greetings}>
        <p className={styles.titleRegular}>Welcome to the</p>
        <p className={styles.titleBold}>Frontend Quiz!</p>
        <p className={styles.subTitle}>Pick a subject to get started.</p>
      </div>
      <div className={styles.quizzesBlocks}>
        {data.quizzes.map((subject, index) => (
          <div className={styles.subjectContainer} key={index}>
            <input
              type="radio"
              name="subject"
              className={styles.subject}
              id={subject.title}
              value={subject.title}
              checked={userChoise === subject.title}
              onChange={onRadioButton}
              readOnly
            />
            <label className={styles.label} htmlFor={subject.title}>
              <div className={styles.icon}>
                <Icons subject={subject.title} />
              </div>
              <p className={styles.iconText}> {subject.title}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
