import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Stats({ responses }) {
    const note = responses.filter(q => q.result === q.answer).length;
    const percentage = Math.round((note / responses.length) * 100);
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header avec score */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
                    <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}</div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Résultats du Quiz</h1>
                    <div className="text-2xl font-semibold text-blue-600 mb-4">
                        {note} / {responses.length} ({percentage}%)
                    </div>
                    <div className={`inline-block px-6 py-2 rounded-full text-white font-medium ${
                        percentage >= 70 ? 'bg-green-500' : 
                        percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                        {percentage >= 70 ? 'Excellent !' : 
                         percentage >= 50 ? 'Bien joué !' : 'À améliorer'}
                    </div>
                </div>

                {/* Questions détaillées */}
                <div className="space-y-6">
                    {responses.map((q, index) => {
                        const isCorrect = q.result === q.answer;
                        return (
                            <div key={q.id} className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${
                                isCorrect ? 'border-green-500' : 'border-red-500'
                            }`}>
                                <div className="p-6">
                                    {/* En-tête question */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            Question {index + 1}
                                        </h3>
                                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {isCorrect ? '✅ Correct' : '❌ Incorrect'}
                                        </div>
                                    </div>

                                    {/* Question avec code ou texte */}
                                    <div className="mb-4">
                                        {q.code ? (
                                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                                <SyntaxHighlighter 
                                                    language="php" 
                                                    style={dracula} 
                                                    customStyle={{ background: 'transparent', margin: 0 }}
                                                >
                                                    {q.question}
                                                </SyntaxHighlighter>
                                            </div>
                                        ) : (
                                            <p className="text-gray-700 text-base leading-relaxed">{q.question}</p>
                                        )}
                                    </div>

                                    {/* Réponses */}
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm font-medium text-gray-600 mb-1">Votre réponse</p>
                                            <p className={`font-medium ${
                                                isCorrect ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {q.result}
                                            </p>
                                        </div>
                                        {!isCorrect && (
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="text-sm font-medium text-gray-600 mb-1">Bonne réponse</p>
                                                <p className="font-medium text-green-600">{q.answer}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Explication */}
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-sm font-medium text-blue-800 mb-2">💡 Explication</p>
                                        <p className="text-blue-700 text-sm leading-relaxed">{q.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}