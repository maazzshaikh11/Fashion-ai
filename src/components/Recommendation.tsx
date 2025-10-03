import { useState } from 'react';
import { Heart, RefreshCw, Share2, Save, Sparkles } from 'lucide-react';

interface RecommendationProps {
  quizAnswers?: Record<string, string>;
  onNavigate: (page: string) => void;
  onRetakeQuiz: () => void;
}

export default function Recommendation({ quizAnswers, onNavigate, onRetakeQuiz }: RecommendationProps) {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [savedItems, setSavedItems] = useState<Set<number>>(new Set());

  const outfits = [
    {
      id: 1,
      title: 'Casual Chic',
      items: [
        {
          name: 'Classic White Tee',
          category: 'Top',
          image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'High-Waist Denim',
          category: 'Bottom',
          image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Leather Sneakers',
          category: 'Shoes',
          image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
      occasion: 'Everyday',
      style: 'Minimalist',
    },
    {
      id: 2,
      title: 'Business Elegant',
      items: [
        {
          name: 'Tailored Blazer',
          category: 'Top',
          image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Dress Pants',
          category: 'Bottom',
          image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Oxford Shoes',
          category: 'Shoes',
          image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
      occasion: 'Professional',
      style: 'Classic',
    },
    {
      id: 3,
      title: 'Weekend Vibes',
      items: [
        {
          name: 'Cozy Sweater',
          category: 'Top',
          image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Relaxed Joggers',
          category: 'Bottom',
          image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Casual Sneakers',
          category: 'Shoes',
          image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
      occasion: 'Casual',
      style: 'Comfortable',
    },
  ];

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  const toggleSave = (id: number) => {
    const newSaved = new Set(savedItems);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedItems(newSaved);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {quizAnswers && (
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <Sparkles size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Personalized for You</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Perfect Outfits
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Based on your style preferences, we've curated these looks just for you
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={onRetakeQuiz}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-all"
              >
                <RefreshCw size={18} />
                Retake Quiz
              </button>
              <button
                onClick={() => onNavigate('closet')}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
              >
                <Save size={18} />
                View My Closet
              </button>
            </div>
          </div>
        )}

        {!quizAnswers && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Outfit Recommendations
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover curated looks for every occasion
            </p>
            <button
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              <Sparkles size={18} />
              Take Quiz for Personal Recommendations
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outfits.map((outfit, index) => (
            <div
              key={outfit.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="grid grid-cols-3 gap-1 p-4">
                  {outfit.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="aspect-square rounded-xl overflow-hidden bg-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute top-6 right-6 flex gap-2">
                  <button
                    onClick={() => toggleLike(outfit.id)}
                    className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                      likedItems.has(outfit.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart
                      size={18}
                      className={likedItems.has(outfit.id) ? 'fill-current' : ''}
                    />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{outfit.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {outfit.occasion}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {outfit.style}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {outfit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{item.category}:</span>
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleSave(outfit.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
                      savedItems.has(outfit.id)
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Save size={16} />
                    {savedItems.has(outfit.id) ? 'Saved' : 'Save'}
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {likedItems.size > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl px-8 py-4 border border-gray-100 shadow-lg">
              <p className="text-gray-900 font-medium">
                You've liked {likedItems.size} outfit{likedItems.size > 1 ? 's' : ''}!
              </p>
              <button
                onClick={() => onNavigate('closet')}
                className="mt-3 text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                View similar styles in your closet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
