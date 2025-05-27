
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4 bg-gradient-to-r from-ocean-400 to-ocean-600 bg-clip-text text-transparent">
              Seafin.shop
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for premium quality sea fish and dry fish. We bring the ocean's finest directly to your table with guaranteed freshness and authentic taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center hover:bg-ocean-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center hover:bg-ocean-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center hover:bg-ocean-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-ocean-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-ocean-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-ocean-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-ocean-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ocean-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ocean-400 transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="mb-2">
                <span className="block font-bold text-ocean-400">Write Us</span>
                <span className="block text-gray-300 text-sm">SALE OFFICE</span>
                <span className="block text-gray-300">ceo@tynioltd.com</span>
              </div>
              <div className="mb-2">
                <span className="block font-bold text-ocean-400">SUPPORT</span>
                <span className="block text-gray-300">info@tynioltd.com</span>
              </div>
              <div className="mb-2">
                <span className="block font-bold text-ocean-400">Call Us</span>
                <span className="block text-gray-300 text-sm">HEAD OFFICE (Cox's Bazaar)</span>
                <span className="block text-gray-300">+880 1635-890477</span>
                <span className="block text-gray-300 text-sm mt-1">BRANCH (Dhaka)</span>
                <span className="block text-gray-300">+880 19200-97225</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Seafin.shop. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-ocean-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-ocean-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-ocean-400 text-sm transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
