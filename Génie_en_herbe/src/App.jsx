import { useState } from "react";
import QuizApp from "./QuizApp"

function App() {
     const  [Start,setStart] = useState(false);
     const [childData, setChildData] = useState(null);
        function StartButton(){
            setStart(true);
        }
        const handleChildData = (data) => {
       setChildData(data);
     }
  return (
    <>
     <div class="  h-[100vh]">
      <div>{ console.log(childData)
       }</div>
      { !Start? 
      <div class="mx-auto mt-30 w-[50vw] flex  h-fit shadow-lg overflow-hidden">
          <div class="w-4/7 flex justify-center items-center">
          <img class="w-[100%]"  src="home.jpg" alt="" />
          </div>
           <div class="w-3/7  flex justify-center items-center">
            <button onClick={StartButton} class="bg-orange-400 p-2 font-bold">Commencer</button>
           </div>
      </div>
      :!childData? <QuizApp onData={handleChildData}/>:<Start responses = {childData}/>}
    </div>
    </>
  )
}

export default App
