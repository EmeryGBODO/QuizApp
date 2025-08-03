import { useState } from "react";
import quiz from "../data/data";
import ProgressBar from "./ProgresBar";
import Stats from "./Stats";
import Home from "./Home";

export default function QuizApp() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [radioValue, setradioValue] = useState('');
  const [reponses, setreponses] = useState([])
  const [numQuestion, setnumQuestion] = useState(1);
  const [quizSelected, setQuizSelected] = useState([]);
  const [showStats, setShowStats] = useState(false);


  const increment = (id, question, answer, result, explanation) => {
    const valeur = { id: id, question: question, result: result, answer: answer, explanation: explanation };
    setreponses([...reponses, valeur]);
    setcurrentQuestion(currentQuestion + 1);
    setradioValue('');
    setnumQuestion(numQuestion + 1);
  }

  function submit(id, question, answer, result, explanation) {
    const valeur = { id: id, question: question, result: result, answer: answer, explanation: explanation };
    setreponses([...reponses, valeur]);
    setShowStats(true);
  }

  const startQuiz = (q) => {
    setQuizSelected(quiz[`${q}`])
  }


  const current = quizSelected.filter(q => quizSelected.indexOf(q) === currentQuestion);

  return (
    <div>
      {quizSelected.length == 0 && <Home quizSelected={startQuiz} />}
    
      {!showStats ? <div className="mt-8 px-4 sm:px-6 lg:px-8">
        {current.map((q, index) => {
          return (
            <div key={index+1} className="flex flex-col items-center py-6">
              {/* Barre de progression */}
              <div className="w-full max-w-2xl mb-8">
                <ProgressBar
                  current={numQuestion}
                  percate={parseInt((numQuestion * 100) / quizSelected.length)}
                  total={quizSelected.length}
                />
              </div>
              {/* Carte de question */}
              <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-5 sm:p-6 space-y-6">
                <section>
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                    Question {currentQuestion + 1}
                  </h2>
                  <p className="text-gray-800 text-base sm:text-lg">{q.question}</p>
                </section>
                <section>
                  <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">
                    Propositions de réponse
                  </h3>
                  <ul className="space-y-3">
                    {q.options.map((opt, id) => {
                      const inputId = `q${currentQuestion + 1}_opt${id}`;
                      return (
                        <li key={inputId} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id={inputId}
                            name={`question_${currentQuestion + 1}`}
                            value={opt}
                            checked={radioValue === opt}
                            onChange={() => setradioValue(opt)}
                            className="accent-blue-600 h-4 w-4"
                          />
                          <label htmlFor={inputId} className="text-gray-700 cursor-pointer text-sm sm:text-base">
                            {opt}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                  {/* Bouton suivant / soumettre */}
                  <div className="mt-6 flex justify-end">
                
                    {currentQuestion + 1 === quizSelected.length ? (
                      <button
                        className={`bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50`}
                        disabled={!radioValue}
                        onClick={() =>submit(currentQuestion + 1,
                                        current[0].question,
                                        current[0].answer,
                                        radioValue,
                                        current[0].explanation)}
                      >
                        Soumettre
                      </button>
                    ) : (
                      <button
                        className={`${!radioValue ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                          } text-white px-4 py-2 rounded-lg transition disabled:opacity-50`}
                        disabled={!radioValue}
                        onClick={() =>
                          increment(
                            currentQuestion + 1,
                            current[0].question,
                            current[0].answer,
                            radioValue,
                            current[0].explanation
                          )
                        }
                      >
                        Suivant
                      </button>
                    )}
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </div>
     :
        <Stats responses={reponses} />}
    </div>
  );
}