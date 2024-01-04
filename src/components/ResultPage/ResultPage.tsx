import { Icons } from "components/Icons";
import styles from "./ResultPage.module.scss";

interface ResultPageProps {
  subject: string;
  score: number;
  onPlayAgainButton: () => void;
}

export const ResultPage = ({
  subject,
  score,
  onPlayAgainButton,
}: ResultPageProps) => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.title}>Quiz completed</p>
          <p className={styles.subtitle}>You scored...</p>
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.subjectContainer}>
            <Icons subject={subject} />
            <p className={styles.subject}>{subject}</p>
          </div>
          <div className={styles.scoreResult}>
            <p className={styles.yourScore}>{score}</p>
            <p className={styles.outOf10}>out of 10</p>
          </div>
        </div>
        <button
          type="button"
          title="play again"
          onClick={onPlayAgainButton}
          className={styles.playAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
