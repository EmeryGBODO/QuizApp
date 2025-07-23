import { useState } from "react";
import quizNodeExpress from "./data";
import ProgressBar from "./ProgresBar";

export default function QuizApp(props) {
  const [currentQuestion, setcurrentQuestion] = useState(1);
  const [radioValue, setradioValue] = useState('');
  const [reponses, setreponses] = useState([])
  const [numQuestion, setnumQuestion] = useState(1);

  function increment(id, question, answer, result, explanation) {
    const valeur = { id: id, question: question, result: result, answer: answer, explanation: explanation }
    setreponses([...reponses, valeur])
    setcurrentQuestion(currentQuestion + 1);
    setradioValue('');
    setnumQuestion(numQuestion + 1)
  }

  function submit() { props.onData(reponses); }

  const current = quizNodeExpress.filter(q => q.id === currentQuestion);
  return (
    <div className="mt-30">
      {current.map((q) => {
        return (
          <div key={q.id} className="flex flex-col justify-center items-center py-8 px-4">
            <span className="m-10">
              <ProgressBar current={numQuestion} total={quizNodeExpress.length} />
            </span>
            {currentQuestion === q.id && (
              <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">
                    Question {q.id}
                  </h2>
                  <p className="text-gray-800">{q.question}</p>
                </section>

                <section>
                  <h2 className="text-lg font-medium text-gray-700 mb-3">
                    Propositions de réponse
                  </h2>
                  <ul className="space-y-3">
                    {q.options.map((opt, index) => {
                      const inputId = `q${q.id}_opt${index}`;
                      return (
                        <li key={inputId} className="flex items-center space-x-3">
                          <input type="radio" id={inputId} name={`question_${q.id}`} value={opt} checked={radioValue === opt} onChange={() => setradioValue(opt)} className="accent-blue-600 h-4 w-4" />
                          <label htmlFor={inputId} className="text-gray-700 cursor-pointer">
                            {opt}
                          </label>
                        </li> );})}
                  </ul>
                  <div className="mt-6 flex justify-end">
                    {currentQuestion === quizNodeExpress.length ? (
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition" disabled={!radioValue} onClick={submit}>
                        Soumettre
                      </button>)
                      : (<button className={`${!radioValue ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}text-white px-4 py-2 rounded-lg transition`} onClick={() => increment(current[0].id, current[0].question, current[0].answer, radioValue, current[0].explanation)} disabled={!radioValue}>
                        Suivant
                      </button>)}
                  </div>
                </section>
              </div>)}
          </div>);
      })}
    </div>);}