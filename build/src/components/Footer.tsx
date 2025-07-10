import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold">Uma Florist</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for fresh, beautiful flowers delivered with care. 
              Creating memorable moments with nature's finest blooms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fresh Bouquets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Garlands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Roses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arrangements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stage Decoration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Car Decoration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Baby Shower</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Decoration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-pink-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">+91 98845-45006</p>
                  <p className="text-sm text-gray-500">Mon - Sun: 8AM - 8PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-pink-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Umaflorist600061@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Chennai, Tamil Nadu</p>
                  <p className="text-sm text-gray-500">India - 600061</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-pink-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Same day delivery</p>
                  <p className="text-sm text-gray-500">Order before 2 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Uma Florist. All rights reserved. | Made with ❤️ for flower lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;