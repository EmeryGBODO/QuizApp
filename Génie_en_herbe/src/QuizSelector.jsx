import { quizCategories } from './data';

export default function QuizSelector({ onSelectQuiz }) {
  return (
    <div className="mt-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Choisissez votre quiz
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {quizCategories.map((category) => (
          <div key={category.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">{category.title}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <p className="text-sm text-gray-500 mb-4">{category.questions.length} questions</p>
            <button
              onClick={() => onSelectQuiz(category)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              Commencer ce quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}