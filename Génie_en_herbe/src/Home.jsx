import { useState } from "react"

export default function Home(){
  const  [Start,setStart] = useState(false);
    function StartButton(){
        setStart(true);
    }
    return(
    <div class="mx-auto mt-30 w-[50vw] flex  h-fit shadow-lg overflow-hidden">
          <div class="w-4/7 flex justify-center items-center">
          <img class="w-[100%]"  src="home.jpg" alt="" />
          </div>
           <div class="w-3/7  flex justify-center items-center">
            <button onClick={StartButton} class="bg-orange-400 p-2 font-bold">Commencer</button>
           </div>
        </div>
        )
}