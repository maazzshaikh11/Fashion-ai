import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import Recommendation from './components/Recommendation';
import Closet from './components/Closet';
import Profile from './components/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string> | undefined>(undefined);

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setCurrentPage('recommendation');
  };

  const handleRetakeQuiz = () => {
    setQuizAnswers(undefined);
    setCurrentPage('quiz');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'quiz':
        return <Quiz onComplete={handleQuizComplete} onNavigate={setCurrentPage} />;
      case 'recommendation':
        return (
          <Recommendation
            quizAnswers={quizAnswers}
            onNavigate={setCurrentPage}
            onRetakeQuiz={handleRetakeQuiz}
          />
        );
      case 'closet':
        return <Closet onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
