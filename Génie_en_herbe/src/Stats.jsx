
export default function Stats({ responses }) {
    const note = responses.filter(q => q.result === q.answer    ).length;
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-xl">
                <h2 className="text-3xl font-extrabold text-center text-[#009cb2] tracking-wide">
                    📊 Résultats du Quiz (<span>Note:</span><span> {note} / {responses.length} </span>)
                </h2>

                {responses.map((q, index) => {
                    const isCorrect = q.result === q.answer;
                    return (
                        <div key={q.id} className={`p-5 rounded-xl border-l-8 shadow-sm transition-all ${isCorrect ? "border-[#009cb2] bg-[#f0fdfa]" : "border-[#e8a500] bg-[#fff7eb]"}`}>
                            <h3 className="font-semibold text-lg mb-3 text-gray-800">
                                <span className="text-gray-500">Question {index + 1} :</span> {q.question}
                            </h3>
                            <div className="space-y-1 text-sm text-gray-700">
                                <p>
                                    <span className="font-medium">Résultat :</span>{" "} {isCorrect ? (
                                        <span className="text-[#009cb2] font-semibold">✅ Correct</span>
                                    ) : (
                                        <span className="text-[#e8a500] font-semibold">❌ Faux</span>
                                    )}
                                </p>
                                <p>
                                    <span className="font-medium">Votre réponse :</span>{" "}
                                    <span className={isCorrect ? "text-[#009cb2]" : "text-[#e8a500]"}>
                                        {q.result}
                                    </span>
                                </p>
                                {!isCorrect && (
                                    <p>
                                        <span className="font-medium">Bonne réponse :</span>{" "}
                                        <span className="text-[#009cb2]">{q.answer}</span>
                                    </p>
                                )}
                                <p className="pt-2">
                                    <span className="font-medium">💡 Explication :</span>{" "}
                                    <span className="text-gray-800">{q.explanation}</span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );}