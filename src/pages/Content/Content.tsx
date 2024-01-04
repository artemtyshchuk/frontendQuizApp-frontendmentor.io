import { WelcomePage } from "components/WelcomePage";
import styles from "./Content.module.scss";
import { useEffect, useState } from "react";
import { Question } from "types/data";
import data from "data.json";
import { Quiz } from "components/Quiz";
import { Header } from "components/Header";
import { ResultPage } from "components/ResultPage";
interface ContentProps {}

export const Content = ({}: ContentProps) => {
  const [subject, setSubject] = useState("");
  const [questionsData, setQuestionsData] = useState<Question[]>();
  const [isCompleted, setIsCompleted] = useState(false);
  const [numOfCurrentQuestion, setNumOfCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [score, setScore] = useState(0);

  const handleData = (userChoise: string) => {
    return data.quizzes.filter((quizz) => quizz.title === userChoise);
  };

  const handleStartButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleAnswerButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    if (!answer) {
      setIsMessage(true);
      setCheckAnswer("");
    } else if (answer === questionsData?.[numOfCurrentQuestion].answer) {
      setCheckAnswer("correct");
      setScore((prevValue) => prevValue + 1);
    } else if (
      answer &&
      answer !== questionsData?.[numOfCurrentQuestion].answer
    ) {
      setCheckAnswer("incorrect");
    }
  };

  const handleNextQuestion = () => {
    if (questionsData && numOfCurrentQuestion + 1 < questionsData?.length) {
      setNumOfCurrentQuestion((prev) => prev + 1);
      setIsMessage(false);
      setAnswer("");
      setCheckAnswer("");
    } else if (questionsData?.length === numOfCurrentQuestion + 1) {
      setIsCompleted(true);
    }
  };

  const handlePlayAgainButton = () => {
    setIsCompleted(false);
    setSubject("");
    setNumOfCurrentQuestion(0);
    setCheckAnswer("");
    setAnswer("");
  };

  useEffect(() => {
    if (subject) {
      const questions = handleData(subject)[0].questions;
      setQuestionsData(questions);
    }
  }, [subject]);

  return (
    <div className={styles.content}>
      <Header subject={subject} />

      {!subject && (
        <WelcomePage onRadioButton={handleStartButton} userChoise={subject} />
      )}

      {subject && !isCompleted && (
        <Quiz
          questionNumber={numOfCurrentQuestion + 1}
          question={questionsData?.[numOfCurrentQuestion].question}
          answers={questionsData?.[numOfCurrentQuestion].options}
          userChoice={answer}
          onAnswerButton={handleAnswerButton}
          checkAnswer={checkAnswer}
          correctAnswer={questionsData?.[numOfCurrentQuestion].answer}
          onSubmitAnswer={handleSubmitAnswer}
          onNextQuestion={handleNextQuestion}
          message={isMessage}
        />
      )}

      {isCompleted && (
        <ResultPage
          subject={subject}
          score={score}
          onPlayAgainButton={handlePlayAgainButton}
        />
      )}
    </div>
  );
};
