
import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-ocean-600 to-ocean-800 bg-clip-text text-transparent">
              Seafin.shop
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Products</a>
              <a href="#about" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-ocean-600 transition-colors font-medium">Contact</a>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5 mr-2" />
                  Account
                </Button>
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
