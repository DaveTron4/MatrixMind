import React, { useState } from "react";

const GuessForm = ({ data, seenAnswer }) => {

    const [userInput, setUserInput] = useState("");
    const [status, setStatus] = useState(""); 
    

    const onCheckAnswer = () => {
        if (seenAnswer) return;

        const input = userInput.trim().toLowerCase();
        const answer = data.answer.toLowerCase();
        if (input === answer) {
            setStatus("correct");
        } else {
            setStatus("wrong");
        }
    };
  
    return (
        <div className="guessForm">
            <h2 className="guessTitle">What is the answer?</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" className={`guessInput_${status}`}  disabled = {seenAnswer} placeholder={seenAnswer ? "Try next card!" : "Type your answer here..."} value={userInput} onChange={(e) => {setUserInput(e.target.value); setStatus("");}}/>
            </form>

            <button type="submit" className="buttonSubmit" disabled = {seenAnswer} onClick={onCheckAnswer}>Check Answer</button>
        </div>
    );
  
};

export default GuessForm;