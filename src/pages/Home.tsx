import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-24 bg-background">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/30 uppercase tracking-widest">
                Latest Production
              </span>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-sans font-black tracking-tighter text-white mb-8 leading-[0.85]">
              PRECISION <br />
              <span className="text-blue-500">ENGINEERED</span> <br />
              ESSENTIALS.
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
              Experience the pinnacle of minimalist performance. A curated system of professional goods for the high-end workspace and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 sidebar-active text-white rounded-xl font-bold transition-all group lg:w-fit"
              >
                <span>Initialize Shop</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700 hover:text-white transition-all border border-slate-700 lg:w-fit"
              >
                Project: Core-7
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Benefits - Styled like Dashboard Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: ShoppingBag, title: 'SYSTEM REVENUE', desc: 'Global Transaction Data', value: 'Live' },
            { icon: Truck, title: 'OPTIMIZED LOGISTICS', desc: 'Secure Global Transit', value: '42ms' },
            { icon: ShieldCheck, title: 'SECURE PROTOCOLS', desc: '256-bit SSL Layer', value: 'Stable' },
            { icon: Clock, title: '24/7 TERMINAL', desc: 'Customer Success Hub', value: 'Online' },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col group hover:border-blue-200 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <benefit.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                </div>
                <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-widest">
                  {benefit.value}
                </span>
              </div>
              <h3 className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1">{benefit.title}</h3>
              <p className="text-sm font-semibold text-slate-800">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-100 pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <h2 className="text-3xl font-black tracking-tight text-slate-900">CURATED MODULES</h2>
            </div>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-[0.2em] italic">Series 0.1 / Active Inventory</p>
          </div>
          <Link to="/shop" className="text-xs font-bold text-blue-600 flex items-center hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors border border-blue-100 mt-2 md:mt-0">
            VIEW FULL CATALOGUE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
