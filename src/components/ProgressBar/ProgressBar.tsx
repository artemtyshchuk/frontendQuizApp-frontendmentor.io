import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  percents: number;
}

export const ProgressBar = ({ percents }: ProgressBarProps) => {
  const progressBarOccupancy = {
    width: `${percents}0%`,
  };
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={progressBarOccupancy}></div>
    </div>
  );
};
