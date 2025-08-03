import { useState } from "react";
// import QuizApp from "./components/QuizApp"
// import Stats from "./components/Stats";
import { Routes, Route, BrowserRouter } from 'react-router';
import QuizApp from "./components/QuizApp";

function App() {
  // const [Start, setStart] = useState(false);
  // const [childData, setChildData] = useState(null);
  // function StartButton() {
  //   setStart(true);
  // }
  // const handleChildData = (data) => {
  //   setChildData(data);
  // }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
