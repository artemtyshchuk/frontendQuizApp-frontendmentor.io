import styles from "./Quiz.module.scss";
import { ReactComponent as CorrectIcon } from "assets/images/icon-correct.svg";
import { ReactComponent as IncorrectIcon } from "assets/images/icon-incorrect.svg";
import { ProgressBar } from "components/ProgressBar";

interface QuizProps {
  question?: string;
  questionNumber: number;
  answers?: string[];
  userChoice: string;
  checkAnswer: string;
  correctAnswer?: string;
  message: boolean;
  onAnswerButton: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
}

export const Quiz = ({
  question,
  questionNumber,
  answers,
  userChoice,
  checkAnswer,
  correctAnswer,
  message,
  onAnswerButton,
  onSubmitAnswer,
  onNextQuestion,
}: QuizProps) => {
  const options = ["A", "B", "C", "D"];

  const answerIcons =
    checkAnswer && checkAnswer === "correct" ? (
      <CorrectIcon />
    ) : checkAnswer === "incorrect" ? (
      <IncorrectIcon />
    ) : (
      ""
    );
  return (
    <div className={styles.quiz}>
      <div className={styles.questionContainer}>
        <p>Question {questionNumber} of 10</p>
        <p>{question}</p>
        <ProgressBar percents={questionNumber} />
        <div className={styles.container}>
          <div className={styles.answersContainer}>
            {answers &&
              answers.map((answer, index) => (
                <div
                  className={`${styles.anserContainer} ${
                    userChoice === answer && styles.isActive
                  } ${userChoice === answer && styles[checkAnswer]} 
                                
                ${checkAnswer && correctAnswer === answer && styles.correct}`}
                  key={index}
                >
                  <input
                    type="radio"
                    id={`${index}-${answer}`}
                    name="answer"
                    value={answer}
                    checked={userChoice === answer}
                    onChange={onAnswerButton}
                  />
                  <label htmlFor={`${index}-${answer}`}>
                    <span>{options[index]}</span>
                    {answers}
                    {userChoice === answer && answerIcons}
                  </label>
                </div>
              ))}
          </div>

          <div className={styles.buttonsContainer}>
            {!checkAnswer ? (
              <button
                type="button"
                title="submit answer"
                onClick={onSubmitAnswer}
                className={styles.buttonSubmit}
              >
                Submit Answer
              </button>
            ) : (
              <button
                type="button"
                title="next question"
                onClick={onNextQuestion}
                className={styles.buttonNextQuestion}
              >
                Next Question
              </button>
            )}
            {!userChoice && message && (
              <p className={styles.message}>
                <span>
                  <IncorrectIcon />
                </span>
                Please select an answer
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
