import React, { useEffect } from "react";

const Flashcard = ({ data, side, setSide, setSeenAnswer, seenAnswer }) => {

  const changeSide = () => {  
    if (side === "question") {
      setSide("answer");
      setSeenAnswer(true);
    } else {
      setSide("question");
    }
  }

  return (
    <div className="flashcard" onClick={changeSide}>
      {side === "question" ? (
        <div className="flashcard-question">{data.question}</div>
      ) : (
        <div className="flashcard-answer">{data.answer}</div>
      )}
    </div>
  );
};

export default Flashcard;
