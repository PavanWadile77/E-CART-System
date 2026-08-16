/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/categories" element={<Shop />} />
              <Route path="/about" element={<Home />} />
            </Routes>
          </main>
          <footer className="border-t border-gray-100 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="font-sans font-bold tracking-tighter text-lg">E-CART</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xs italic">
                    Redefining modern essentials through minimalist design and premium quality. Built for the contemporary lifestyle.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Shop</h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li className="hover:text-black transition-colors cursor-pointer">Electronics</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Fashion</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Home Decor</li>
                    <li className="hover:text-black transition-colors cursor-pointer">New Arrivals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Support</h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li className="hover:text-black transition-colors cursor-pointer">Contact Us</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Shipping Policy</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Returns & Exchanges</li>
                    <li className="hover:text-black transition-colors cursor-pointer">FAQs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Follow Us</h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                    <li className="hover:text-black transition-colors cursor-pointer">Instagram</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Twitter</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Pinterest</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  © 2024 E-CART SYSTEM. ALL RIGHTS RESERVED.
                </p>
                <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}
