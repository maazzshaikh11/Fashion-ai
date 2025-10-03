import { ArrowRight, Sparkles, Heart, Palette } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const members = [
    {
      name: 'Sarah Chen',
      description: 'Minimalist fashion enthusiast finding her perfect everyday style',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Marcus Johnson',
      description: 'Professional exploring smart casual looks for work and beyond',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Emma Rodriguez',
      description: 'Creative soul discovering bold patterns and vintage vibes',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Alex Park',
      description: 'Tech professional building a versatile capsule wardrobe',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Styling',
      description: 'Get personalized outfit recommendations based on your unique style',
    },
    {
      icon: Heart,
      title: 'Build Your Closet',
      description: 'Curate your virtual wardrobe with pieces you love',
    },
    {
      icon: Palette,
      title: 'Find Your Aesthetic',
      description: 'Discover your fashion identity through our interactive quiz',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm font-medium text-gray-700">Your Personal Style Assistant</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Let AI help you curate outfits that match your mood, occasion, and personal aesthetic.
            Build your dream wardrobe and never wonder what to wear again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('quiz')}
              className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Take the Style Quiz
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('recommendation')}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all border-2 border-gray-200"
            >
              Explore Outfits
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                <feature.icon size={24} className="text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Members</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of style seekers who found their fashion confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group text-center animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
