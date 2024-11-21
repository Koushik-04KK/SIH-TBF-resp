import React, { useState } from 'react';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [faqState, setFaqState] = useState([false, false, false, false]);

  // Static FAQ Data
  const faqs = [
    { question: 'What is the purpose of this platform?', answer: 'This platform is designed to assist railway officials in monitoring the health of railway Tunnel Booster Fans & managing schedules efficiently.' },
    { question: 'How do I start monitoring a system?', answer: 'Navigate to the Dashboard section and click on the Start Monitoring button to begin tracking system statistics.' },
    { question: 'What is Remaining Useful Life (RUL)?', answer: 'RUL refers to the estimated time remaining before a system or component needs replacement or repair, calculated based on current performance data.' },
    { question: 'What should I do if I face login issues?', answer: 'Ensure your internet connection is stable. Clear your browser cache and try again.' },
  ];

  // Function to handle query submission
  const handleQuestionSubmit = () => {
    if (!question.trim()) {
      setAnswer('Please enter a question.');
      return;
    }
    // Simulated response for demo purposes
    setAnswer('Thank you for your question. This is a static response.');
  };

  // Toggle FAQ visibility
  const toggleFaq = (index) => {
    const newFaqState = [...faqState];
    newFaqState[index] = !newFaqState[index];
    setFaqState(newFaqState);
  };

  return (
    <div className="bg-customColor-otherpagesbackground w-full flex flex-col items-center py-8">
      <div className="min-w-[1300px] bg-customColor-rmcardbackground rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button className="bg-[#387A79] text-white px-6 py-2 rounded-3xl hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-3xl font-medium text-gray-700">CHATBOT ASSISTANCE</h1>
          <button className="bg-[#BE4848] text-white px-6 py-2 rounded-3xl hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>

        {/* Chatbot Assistance Section */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Ask Your Doubts"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#387A79]"
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-[#387A79] text-white px-6 py-2 rounded-md hover:bg-teal-600"
          >
            Submit
          </button>

          {/* Answer Card */}
          {answer && (
            <div className="mt-6 bg-white p-4 rounded-md border border-gray-300 shadow-md text-gray-700">
              {answer}
            </div>
          )}
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="text-3xl text-center font-medium ml-3 text-gray-700 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md border border-gray-300 cursor-pointer shadow-md"
              >
                <span className="text-gray-700 font-medium">{faq.question}</span>
                <button className="text-gray-500">
                  {faqState[index] ? '▲' : '▼'}
                </button>
              </div>
              {faqState[index] && (
                <div className="mt-2 bg-white px-4 py-3 rounded-md border border-gray-300 shadow-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;