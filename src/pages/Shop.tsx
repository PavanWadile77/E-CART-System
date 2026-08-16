import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8 border-b border-slate-100 pb-12">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">INVENTORY</h1>
            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded border border-emerald-100 uppercase tracking-widest">
              Live Feed
            </span>
          </div>
          <p className="text-slate-500 font-medium">Project: ecart-system-4ac83 / {filteredProducts.length} Assets Found</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Query product database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all outline-none shadow-sm"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "p-3 border rounded-xl flex items-center space-x-2 transition-all shadow-sm",
              showFilters 
                ? "sidebar-active text-white border-transparent" 
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            )}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-bold hidden sm:inline uppercase tracking-widest">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Filters Desktop */}
        <aside className="hidden lg:block space-y-12">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center">
              <span className="w-8 h-px bg-slate-200 mr-3" />
              Subsystems
            </h3>
            <div className="space-y-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "block w-full text-left px-5 py-3 text-sm font-bold rounded-xl transition-all",
                    selectedCategory === category 
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl shadow-blue-900/5">
            <h3 className="font-bold uppercase text-[10px] tracking-widest text-blue-400 mb-4">Storage Quota</h3>
            <div className="mt-3 flex justify-between text-[10px] mb-2 font-mono opacity-80">
              <span className="truncate">ecart-system-4ac83</span>
              <span>24.8%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-blue-500 h-full w-[24.8%] rounded-full"></div>
            </div>
            <p className="mt-4 text-[9px] text-slate-400 leading-relaxed italic">
              Performance optimized for production environments.
            </p>
          </div>
        </aside>

        {/* Filters Mobile */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mb-8 overflow-hidden"
            >
              <div className="p-6 bg-gray-50 rounded-2xl space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">By Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "px-4 py-2 text-sm rounded-full border transition-all",
                          selectedCategory === category 
                            ? "bg-black border-black text-white" 
                            : "bg-white border-gray-200 text-gray-600"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
