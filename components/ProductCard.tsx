import React from 'react';
    import { Product } from '../types';
    
    interface ProductCardProps {
      product: Product;
      onClick: (product: Product) => void;
    }
    
    const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
      return (
        <div 
          className="product-card group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/10 transform transition-all hover:scale-[1.02] hover:bg-white/10 cursor-pointer"
          onClick={() => onClick(product)}
        >
          {/* Image Placeholder area */}
          <div className={`h-48 w-full ${product.imagePlaceholderColor} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <span className="text-4xl opacity-50 select-none filter drop-shadow-lg">✨</span>
            
            {/* Price Tag */}
            <div className="absolute bottom-2 right-2 bg-luna-dark/90 text-luna-base px-3 py-1 rounded-full font-serif text-sm shadow-md border border-luna-base/20">
              {product.price}
            </div>
          </div>
    
          <div className="p-4">
            <h3 className="font-serif text-xl font-semibold text-luna-base mb-1 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-luna-base/60 font-sans uppercase tracking-wider mb-2">
              {product.weight}
            </p>
            <p className="text-sm text-gray-300 line-clamp-3 font-sans leading-relaxed">
              {product.benefits}
            </p>
            
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xs font-bold text-luna-green uppercase tracking-wide">
                    Ver Detalles &rarr;
                </span>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductCard;