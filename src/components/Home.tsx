import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Little Lemon
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience Mediterranean cuisine at its finest
            </p>
            <Link
              aria-label="Reserve a Table"
              to="/reservation"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="text-green-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Founded in 2010, Little Lemon brings the authentic flavors of the Mediterranean 
              to your table. Our recipes have been passed down through generations, 
              combining traditional techniques with modern culinary innovation.
            </p>
            <p className="text-gray-600 text-lg">
              Every dish is prepared with locally sourced ingredients and served with 
              the warmth of Mediterranean hospitality. Join us for an unforgettable 
              dining experience that will transport you to the sunny coasts of the Mediterranean.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              alt="Restaurant interior"
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
