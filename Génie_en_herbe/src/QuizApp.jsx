import { useState } from "react";
import quizNodeExpress from "./data";
import ProgressBar from "./ProgresBar";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function QuizApp(props) {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [radioValue, setradioValue] = useState('');
  const [reponses, setreponses] = useState([])
  const [numQuestion, setnumQuestion] = useState(1);

  function increment(id, question, answer, result, explanation) {
    const valeur = { id: id, question: question, result: result, answer: answer, explanation: explanation };
    setreponses([...reponses, valeur]);
    setcurrentQuestion(currentQuestion + 1);
    setradioValue('');
    setnumQuestion(numQuestion + 1)
  }

  function submit(id, question, answer, result, explanation) {
    const val = { id: id, question: question, result: result, answer: answer, explanation: explanation }
   const updated = [...reponses, val];
    setreponses(updated);
    props.onData(updated); }

  const current = quizNodeExpress.filter(q => quizNodeExpress.indexOf(q) === currentQuestion);

  return (
  <div className="mt-8 px-4 sm:px-6 lg:px-8">
    {current.map((q) => {
      return (
        <div key={q.id} className="flex flex-col items-center py-6">
          {/* Barre de progression */}
          <div className="w-full max-w-2xl mb-8">
            <ProgressBar
              current={numQuestion}
              percate={parseInt((numQuestion * 100) / quizNodeExpress.length)}
              total={quizNodeExpress.length}
            />
          </div>

          {/* Carte de question */}
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-5 sm:p-6 space-y-6">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                Question {q.id}
              </h2>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-y-scroll overflow-x-scroll max-h-80">
                <SyntaxHighlighter language="php" style={dracula} customStyle={{ background: 'black', margin: 0 }}>{q.question}</SyntaxHighlighter>
                </pre>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4">
                Propositions de réponse
              </h3>
              <ul className="space-y-3">
                {q.options.map((opt, index) => {
                  const inputId = `q${q.id}_opt${index}`;
                  return (
                    <li key={inputId} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={inputId}
                        name={`question_${q.id}`}
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
                {currentQuestion + 1 === quizNodeExpress.length ? (
                  <button
                    className={`bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50`}
                    disabled={!radioValue}
                    onClick={() =>
                      submit(
                        current[0].id,
                        current[0].question,
                        current[0].answer,
                        radioValue,
                        current[0].explanation
                      )
                    }
                  >
                    Soumettre
                  </button>
                ) : (
                  <button
                    className={`${
                      !radioValue ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    } text-white px-4 py-2 rounded-lg transition disabled:opacity-50`}
                    disabled={!radioValue}
                    onClick={() =>
                      increment(
                        current[0].id,
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
);
}