"use client";

import { useState } from "react";

const practiceCategories = [
  { id: 1, title: "Quantitative Aptitude", description: "Practice arithmetic, algebra, and geometry." },
  { id: 2, title: "Logical Reasoning", description: "Test your problem-solving skills." },
  { id: 3, title: "Verbal Ability", description: "Enhance grammar, vocabulary, and comprehension." },
  { id: 4, title: "Data Interpretation", description: "Analyze and interpret data charts and graphs." },
];

const sampleQuestions = [
  { id: 1, question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: "30" },
  { id: 2, question: "Find the missing number: 2, 6, 12, ?, 30.", options: ["14", "18", "20", "24"], correct: "20" },
];

export const Practice=()=> {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-semibold mb-4 text-black">Categories</h2>
        <ul className="space-y-3">
          {practiceCategories.map((category) => (
            <li
              key={category.id}
              className={`p-3 rounded-lg cursor-pointer transition ${
                selectedCategory === category.id ? "bg-primary text-white" : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                setQuizStarted(false);
              }}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-black mb-6">Practice Questions</h2>

        {/* Questions Section */}
        {selectedCategory && !quizStarted && (
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">
              Questions for {practiceCategories.find((cat) => cat.id === selectedCategory)?.title}
            </h3>
            <button className="bg-primary text-white px-6 py-2 rounded-lg" onClick={() => setQuizStarted(true)}>
              Start Quiz
            </button>
          </div>
        )}

        {/* Quiz Section */}
        {quizStarted && (
          <div className="mt-6 p-6 border rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Quiz Time!</h3>
            {sampleQuestions.map((q) => (
              <div key={q.id} className="mb-4">
                <p className="text-black font-medium">{q.question}</p>
                <div className="flex flex-col gap-2 mt-2">
                  {q.options.map((option, index) => (
                    <button key={index} className="border p-2 rounded-lg hover:bg-gray-200">
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
