import { useState } from 'react';
import { Plus, Trash2, CreditCard as Edit3, Shirt, Grid2x2 as Grid, List } from 'lucide-react';

interface ClosetProps {
  onNavigate: (page: string) => void;
}

export default function Closet({ onNavigate }: ClosetProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: Shirt },
    { id: 'tops', name: 'Tops', icon: Shirt },
    { id: 'bottoms', name: 'Bottoms', icon: Shirt },
    { id: 'dresses', name: 'Dresses', icon: Shirt },
    { id: 'outerwear', name: 'Outerwear', icon: Shirt },
    { id: 'shoes', name: 'Shoes', icon: Shirt },
    { id: 'accessories', name: 'Accessories', icon: Shirt },
  ];

  const closetItems = [
    {
      id: 1,
      name: 'Classic White Tee',
      category: 'tops',
      color: 'White',
      brand: 'Everlane',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 12,
    },
    {
      id: 2,
      name: 'High-Waist Denim',
      category: 'bottoms',
      color: 'Blue',
      brand: "Levi's",
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 8,
    },
    {
      id: 3,
      name: 'Leather Jacket',
      category: 'outerwear',
      color: 'Black',
      brand: 'AllSaints',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 15,
    },
    {
      id: 4,
      name: 'Floral Summer Dress',
      category: 'dresses',
      color: 'Floral',
      brand: 'Zara',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 5,
    },
    {
      id: 5,
      name: 'White Sneakers',
      category: 'shoes',
      color: 'White',
      brand: 'Common Projects',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 20,
    },
    {
      id: 6,
      name: 'Silk Scarf',
      category: 'accessories',
      color: 'Multi',
      brand: 'Hermès',
      image: 'https://images.pexels.com/photos/5706269/pexels-photo-5706269.jpeg?auto=compress&cs=tinysrgb&w=400',
      wornCount: 3,
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? closetItems
      : closetItems.filter((item) => item.category === selectedCategory);

  const stats = {
    totalItems: closetItems.length,
    mostWorn: closetItems.reduce((prev, current) =>
      prev.wornCount > current.wornCount ? prev : current
    ),
    leastWorn: closetItems.reduce((prev, current) =>
      prev.wornCount < current.wornCount ? prev : current
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">My Closet</h1>
            <p className="text-lg text-gray-600">
              Manage your virtual wardrobe and track your style
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List size={18} />
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              <Plus size={18} />
              <span className="hidden sm:inline">Add Item</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalItems}</div>
            <div className="text-sm text-gray-600">Total Items</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.mostWorn.name}</div>
            <div className="text-sm text-gray-600">Most Worn ({stats.mostWorn.wornCount}x)</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.leastWorn.name}</div>
            <div className="text-sm text-gray-600">Needs Love ({stats.leastWorn.wornCount}x)</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-900'
              }`}
            >
              <category.icon size={16} />
              {category.name}
            </button>
          ))}
        </div>

        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <Edit3 size={14} />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.color}</span>
                    <span className="text-xs text-gray-500">Worn {item.wornCount}x</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all flex items-center gap-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.brand} • {item.color}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Worn {item.wornCount}x
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shirt size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items yet</h3>
            <p className="text-gray-600 mb-6">
              Start building your closet by adding your favorite pieces
            </p>
            <button
              onClick={() => onNavigate('recommendation')}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Recommendations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
