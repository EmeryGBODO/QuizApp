import data from "../data/data";

export default function Home( {quizSelected} ){

    function start(q){
        console.log(q);
        
        quizSelected(q);
    }

   return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Choisis ton quiz 📚</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {Object.keys(data).map((q, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src="home.jpg"
            alt=""
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              {q.split('_').join(' ')}
            </h2>
            <button
              onClick={() => start(q)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Commencer ➤
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}