import { WelcomePage } from "components/WelcomePage";
import styles from "./Content.module.scss";
import { useEffect, useState } from "react";
import { Question } from "types/data";
import data from "data.json";
interface ContentProps {}

export const Content = ({}: ContentProps) => {
  const [subject, setSubject] = useState("");
  const [questionsData, setQuestionsData] = useState<Question[]>();

  const handleData = (userChoise: string) => {
    return data.quizzes.filter((quizz) => quizz.title === userChoise);
  };

  const handleStartButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    if (subject) {
      const questions = handleData(subject)[0].questions;
      setQuestionsData(questions);
    }
  }, [subject]);

  return (
    <div className={styles.content}>
      {!subject && (
        <WelcomePage onRadioButton={handleStartButton} userChoise={subject} />
      )}
    </div>
  );
};
