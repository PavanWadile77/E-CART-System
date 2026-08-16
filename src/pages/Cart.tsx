import React from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet. Time to explore!</p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center space-x-4 mb-12">
        <Link to="/shop" className="p-2 text-slate-400 hover:text-blue-600 transition-colors bg-slate-50 rounded-xl border border-slate-100">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Checkout Queue</h1>
          <p className="text-slate-500 font-semibold text-xs tracking-widest mt-1 uppercase">Ready for Deployment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        {/* Items List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm space-x-6 group hover:border-blue-100 transition-colors"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500 mb-1 block">
                    MODULE: {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 truncate mb-1">{item.name}</h3>
                  <p className="text-slate-500 text-sm font-bold">{formatCurrency(item.price)}</p>
                </div>
                
                <div className="flex items-center border border-slate-100 rounded-xl p-1 bg-slate-50">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-blue-600 shadow-sm"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-10 text-center text-xs font-black text-slate-900">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-blue-600 shadow-sm"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-right hidden sm:block min-w-[100px]">
                  <p className="text-sm font-black text-slate-900">{formatCurrency(item.price * item.quantity)}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <aside>
          <div className="bg-slate-900 rounded-3xl p-10 sticky top-24 text-white shadow-2xl shadow-blue-900/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <ShoppingCart className="w-32 h-32 rotate-12" />
            </div>
            
            <h2 className="text-xl font-bold mb-10 tracking-widest uppercase text-blue-400 relative z-10">Order Logistics</h2>
            
            <div className="space-y-6 mb-10 relative z-10">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 lowercase">subtotal_sum</span>
                <span className="text-slate-100 uppercase">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 lowercase">transit_cost</span>
                <span className="text-emerald-400 font-bold uppercase tracking-widest underline underline-offset-4 decoration-1">Optimized</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 lowercase">protocol_tax</span>
                <span className="text-slate-100 uppercase">{formatCurrency(totalPrice * 0.08)}</span>
              </div>
              <div className="h-px bg-slate-800 border-none my-8" />
              <div className="flex justify-between items-end relative z-10">
                <div>
                  <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">Total Payable</div>
                  <div className="text-3xl font-black text-white leading-none tracking-tighter">
                    {formatCurrency(totalPrice * 1.08)}
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-5 sidebar-active text-white rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl active:scale-95 relative z-10">
              Initialize Order
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2 relative z-10">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                SHA-256 SECURED CONNECTION
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
