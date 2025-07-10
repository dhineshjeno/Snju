import React from 'react';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh Flowers
                <span className="block text-pink-600">Delivered Daily</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Premium quality flowers, bouquets, and arrangements for every occasion. 
                Handcrafted with love and delivered fresh to your doorstep.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="flex items-center justify-center text-yellow-400 mb-1">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center space-x-2 group">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/1.jpeg"
                alt="Beautiful flower bouquet"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Truck className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders over ₹500</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Same Day Delivery</h3>
              <p className="text-sm text-gray-600">Order before 2 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fresh Guarantee</h3>
              <p className="text-sm text-gray-600">100% freshness assured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;