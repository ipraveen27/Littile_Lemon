import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">Little Lemon</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/menu" className="hover:bg-green-700 px-3 py-2 rounded-md">Menu</Link>
              <Link to="/reservation" className="hover:bg-green-700 px-3 py-2 rounded-md">Reservation</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/reservation"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Reservation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}