import { useState } from "react";
import QuizApp from "./QuizApp"
import Stats from "./Stats";
import QuizSelector from "./QuizSelector";

function App() {
  const [Start, setStart] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [childData, setChildData] = useState(null);
  function StartButton() {
    setStart(true);
  }
  const handleChildData = (data) => {
    setChildData(data);
  }
  return (
    <>
      <div className="  h-[100vh]">

        {childData && (
          <div className="fixed top-6 left-6 z-50">
            <button 
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
              onClick={() => { setStart(false); setSelectedQuiz(null); setChildData(null) }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </button>
          </div>
        )}
        {!Start ?
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center">
              {/* Hero Section */}
              <div className="mb-8">
                <img
                  className="w-24 h-24 mx-auto mb-6 rounded-full shadow-lg"
                  src="https://res.cloudinary.com/funbooker/image/upload/f_auto,q_auto,w_80,h_80,dpr_3.0/v1/marketplace-user/vjouhbodr6zczya3stnt"
                  alt="Quiz Icon"
                />
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                  Génie en Herbe
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Testez vos connaissances en programmation avec nos quiz interactifs sur PHP, CSS, Node.js et bien plus !
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">🧠</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Quiz Variés</h3>
                  <p className="text-gray-600 text-sm">Plusieurs niveaux de difficulté</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Code Pratique</h3>
                  <p className="text-gray-600 text-sm">Exemples de code réels</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-800 mb-2">Résultats</h3>
                  <p className="text-gray-600 text-sm">Statistiques détaillées</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={StartButton}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              >
                🚀 Commencer le Quiz
              </button>
            </div>
          </div>

          : !selectedQuiz ? 
            <QuizSelector onSelectQuiz={setSelectedQuiz} />
          : !childData ? 
            <QuizApp selectedQuiz={selectedQuiz} onData={handleChildData} /> 
          : <Stats responses={childData} />}
      </div>
    </>
  )
}

export default App
