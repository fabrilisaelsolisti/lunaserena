import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOrder: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOrder }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-luna-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative bg-luna-light w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header Image */}
        <div className={`h-40 ${product.imagePlaceholderColor} relative flex items-center justify-center`} style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <button 
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/40 transition"
            >
                ✕
            </button>
            <h2 className="text-3xl font-serif text-white drop-shadow-md text-center px-4">
                {product.name}
            </h2>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
            <div className="space-y-4">
                <div>
                    <h4 className="font-serif text-lg text-luna-dark border-b border-luna-dark/20 pb-1 mb-1">Activos Estrella</h4>
                    <p className="text-sm text-gray-700 font-sans">{product.ingredients}</p>
                </div>
                
                <div>
                    <h4 className="font-serif text-lg text-luna-dark border-b border-luna-dark/20 pb-1 mb-1">Beneficios</h4>
                    <p className="text-sm text-gray-700 font-sans">{product.benefits}</p>
                </div>

                <div>
                    <h4 className="font-serif text-lg text-luna-dark border-b border-luna-dark/20 pb-1 mb-1">Ideal Para</h4>
                    <p className="text-sm text-gray-700 font-sans">{product.idealFor}</p>
                </div>
                
                <div className="pt-2 flex justify-between items-center font-bold text-luna-dark">
                    <span>Peso: {product.weight}</span>
                    <span className="text-xl">{product.price}</span>
                </div>
            </div>
        </div>

        <div className="p-4 bg-luna-base/30 border-t border-luna-dark/10 flex gap-3">
            <button 
                onClick={onClose}
                className="flex-1 py-3 border border-luna-dark/30 rounded-lg text-luna-dark font-sans text-sm font-medium hover:bg-white/50 transition"
            >
                Cerrar
            </button>
            <button 
                onClick={() => onOrder(product)}
                className="flex-1 py-3 bg-luna-dark text-white rounded-lg font-sans text-sm font-medium hover:bg-luna-dark/90 shadow-lg transition flex items-center justify-center gap-2"
            >
                <span>Pedir</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;