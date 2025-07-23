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
          <div class="mx-auto mt-50 w-[40vw] flex  h-fit shadow-lg overflow-hidden">
            <div class="w-4/7 flex justify-center items-center">
              <img class="w-[100%]" src="home.jpg" alt="" />
            </div>
            <div class="w-3/7  flex justify-center items-center">
              <button onClick={StartButton} class="bg-orange-400 p-2 font-bold">Commencer</button>
            </div>
          </div>
          : !childData ? <QuizApp onData={handleChildData} /> : <Stats responses={childData} />}
      </div>
    </>
  )
}

export default App
