import { TQuiz } from "@/types/types";
import { FC } from "react";

const QuizOptions: FC<TQuiz> = ({ number, option }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      <span className="heading-five">{number}</span>
      <p>{option}</p>
    </div>
  );
};

export default QuizOptions;
