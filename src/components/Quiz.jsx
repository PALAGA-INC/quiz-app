import React from 'react'
import { useState } from 'react'

function Quiz() {

   const questions = [
      {
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
   ]

   const [cu, setCu] = useState(0)
	const [showScore, setShowScore ] = useState(false)
	const [score, setScore] = useState(0)
   
   const handleClick = (c) => {
      if(c) {
			setScore(score + 1)
		}
		const movequ = cu + 1
		if(movequ < questions.length) {
			setCu(movequ)
		}else{
			setShowScore(true)
		}
   }

	const showHeader = () => {
		return(
			<div className="header-section center">
               <h1>🤖 Quiz App 🤖</h1>
         </div>
		)
	}

   if(showScore) {
      return(
			<>
			{showHeader()}
				<div className="score-section">
					<h1>Your Score is {score}/</h1><span>{questions.length}</span>
				</div>
			</>
      )
   } else {
      return (
         <>
            {showHeader()}
            <div className="quiz-body center">
               
               <div className="question-section ">
                  {questions[cu].questionText}
               </div>
   
               <div className="button-section ">
                  {questions[cu].answerOptions.map(question => {
                     return(<button onClick={() => handleClick(question.isCorrect)}>{question.answerText}</button>)
                  })}
               </div>
            </div>
         </>
      )
   }

}

export default Quiz
