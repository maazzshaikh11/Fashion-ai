import { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: Record<string, string>) => void;
  onNavigate: (page: string) => void;
}

export default function Quiz({ onComplete, onNavigate }: QuizProps) {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'style',
      question: 'How would you describe your overall style?',
      options: [
        'Classic & Timeless',
        'Trendy & Fashion-Forward',
        'Casual & Comfortable',
        'Edgy & Bold',
        'Minimalist & Clean',
        'Bohemian & Free-Spirited',
      ],
    },
    {
      id: 'colors',
      question: 'What color palette do you gravitate towards?',
      options: [
        'Neutral tones (black, white, beige, grey)',
        'Earth tones (brown, olive, rust)',
        'Pastels (soft pink, baby blue, lavender)',
        'Bold & Bright (red, royal blue, emerald)',
        'Monochrome (all black or all white)',
        'Mixed & Colorful',
      ],
    },
    {
      id: 'fit',
      question: 'What fit do you prefer for your clothing?',
      options: [
        'Fitted & Tailored',
        'Loose & Oversized',
        'Balanced (fitted on top, loose on bottom or vice versa)',
        'Depends on the occasion',
      ],
    },
    {
      id: 'patterns',
      question: 'Do you like patterns or prints?',
      options: [
        'Love them! The bolder, the better',
        'Subtle patterns (stripes, dots)',
        'Prefer solid colors',
        'Occasionally, depending on mood',
      ],
    },
    {
      id: 'occasion',
      question: 'What occasions do you dress for most?',
      options: [
        'Work/Professional settings',
        'Casual everyday wear',
        'Social events & parties',
        'Active/Athletic activities',
        'Mix of everything',
      ],
    },
    {
      id: 'comfort',
      question: 'How important is comfort vs. style?',
      options: [
        'Comfort is everything',
        'Style first, comfort second',
        'Equal balance',
        'Depends on the situation',
      ],
    },
    {
      id: 'budget',
      question: 'What is your typical clothing budget?',
      options: [
        'Budget-friendly (value matters)',
        'Mid-range (quality & style)',
        'Premium (investment pieces)',
        'Mix of all ranges',
      ],
    },
    {
      id: 'shopping',
      question: 'How do you prefer to shop?',
      options: [
        'Online shopping',
        'In-store browsing',
        'Both equally',
        'Rarely shop, prefer what I have',
      ],
    },
    {
      id: 'inspiration',
      question: 'Where do you find style inspiration?',
      options: [
        'Social media (Instagram, TikTok, Pinterest)',
        'Celebrities & Fashion icons',
        'Street style & people around me',
        'Fashion magazines & blogs',
        'Movies & TV shows',
        'I create my own style',
      ],
    },
    {
      id: 'accessories',
      question: 'How do you feel about accessories?',
      options: [
        'Love them! They complete the look',
        'Minimal accessories only',
        'Statement pieces occasionally',
        'Not a fan',
      ],
    },
  ];

  const motivationalQuotes = [
    "You're almost there!",
    "Looking great so far!",
    "Your style is taking shape!",
    "Keep going, you're doing amazing!",
    "Almost done, stay with us!",
    "Your perfect outfit awaits!",
    "Just a few more questions!",
    "We're loving your choices!",
  ];

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    setStep(1);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      onComplete({ ...answers, [questionId]: answer, gender });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else if (step === 1) {
      setStep(0);
      setGender('');
    }
  };

  const progress = step === 0 ? 0 : ((step - 1) / questions.length) * 100;

  if (step === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Sparkles size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Style Discovery Quiz</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Find Your Style
            </h1>
            <p className="text-lg text-gray-600">
              First, tell us who you're styling for
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => handleGenderSelect('female')}
              className="group relative overflow-hidden bg-white rounded-3xl p-12 border-2 border-gray-200 hover:border-gray-900 transition-all hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4">👗</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Female</h3>
                <p className="text-gray-600">Explore women's fashion</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => handleGenderSelect('male')}
              className="group relative overflow-hidden bg-white rounded-3xl p-12 border-2 border-gray-200 hover:border-gray-900 transition-all hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="text-6xl mb-4">👔</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Male</h3>
                <p className="text-gray-600">Explore men's fashion</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {step} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-lg font-medium text-gray-900 animate-fadeIn">
            {motivationalQuotes[Math.min(step - 1, motivationalQuotes.length - 1)]}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, option)}
                className="group text-left p-6 rounded-2xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 font-medium">
                    {option}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Exit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
