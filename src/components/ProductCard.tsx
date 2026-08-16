import React from 'react';
import { Product } from '../src/types';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button className="p-2 bg-white/70 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm border border-white">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 sidebar-active text-white text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link to={`/product/${product.id}`} className="block">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {product.category}
            </span>
            <div className="flex items-center space-x-1 text-xs text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors truncate">
            {product.name}
          </h3>
          <p className="text-lg font-extrabold text-slate-900 tracking-tight">
            {formatCurrency(product.price)}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
