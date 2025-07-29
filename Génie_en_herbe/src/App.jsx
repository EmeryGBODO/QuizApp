import { useState } from "react";
import QuizApp from "./QuizApp"
import Stats from "./Stats";

function App() {
  const [Start, setStart] = useState(false);
  const [childData, setChildData] = useState(null);
  function StartButton() {
    setStart(true);
  }
  const handleChildData = (data) => {
    setChildData(data);
  }
  return (
    <>
      <div class="  h-[100vh]">

        {childData && <button className="ml-[30vw] cursor-pointer hover:bg-gray-300 font-bold text-gray-500 p-2" onClick={() => { setStart(false); setChildData(null) }}>retour</button>}
        {!Start ?
          <div className="mx-auto mt-12 w-full max-w-3xl flex flex-col md:flex-row h-fit shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-4/7 flex justify-center items-center bg-gray-100">
              <img
                className="w-full h-auto object-cover"
                src="home.jpg"
                alt="Accueil"
              />
            </div>

            {/* Bouton */}
            <div className="w-full md:w-3/7 flex justify-center items-center p-6 bg-white">
              <button
                onClick={StartButton}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Commencer
              </button>
            </div>
          </div>

          : !childData ? <QuizApp onData={handleChildData} /> : <Stats responses={childData} />}
      </div>
    </>
  )
}

export default App
