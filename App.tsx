import React, { useEffect, useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { Product } from './types';
import MoonBackground from './components/MoonBackground';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

// Declare ScrollReveal type for TypeScript
declare const ScrollReveal: any;

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<'all' | 'natural' | 'esoterico' | 'temporada'>('all');

  useEffect(() => {
    // Initialize ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        mobile: true,
        reset: false // Do not reset animations on scroll up for smoother mobile experience
      });

      sr.reveal('.reveal-header', { delay: 100, origin: 'top' });
      sr.reveal('.reveal-text', { delay: 300 });
      sr.reveal('.reveal-card', { interval: 150 });
      sr.reveal('.reveal-footer', { delay: 200, origin: 'bottom' });
    }
  }, [filter]); // Re-run or ensure elements are captured if filter changes layout significantly (though React rendering might clash with SR, simple key change usually fixes it)

  const handleOrder = (product: Product) => {
    const message = `Hola Luna Serena, estoy interesado en el ${product.name} ($${product.price})`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleGeneralOrder = () => {
    const message = `Hola Luna Serena, quisiera más información sobre sus jabones.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const filteredProducts = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen relative pb-20">
      <MoonBackground />

      {/* Main Container */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 pt-8">

        {/* Header / Logo Section */}
        <header className="text-center mb-12 reveal-header">
          <div className="relative inline-block mb-4">
            {/* Logo Simulation - keeping beige background to act as the Moon */}
            <div className="w-32 h-32 mx-auto rounded-full bg-luna-base border-4 border-luna-base/20 flex items-center justify-center shadow-[0_0_50px_rgba(234,216,206,0.3)] relative overflow-hidden">
              <div className="absolute inset-0 bg-luna-dark rounded-full opacity-10 scale-90 translate-x-4"></div>
              <div className="flex flex-col items-center z-10">
                <span className="text-4xl drop-shadow-md">🌙</span>
                <span className="font-serif text-luna-dark font-bold text-lg leading-none mt-2">LUNA</span>
                <span className="font-serif text-luna-dark tracking-widest text-xs">SERENA</span>
              </div>
            </div>
            {/* Decorative branch */}
            <div className="absolute -bottom-2 -right-4 text-3xl text-luna-green transform -rotate-12 drop-shadow-lg">🌿</div>
          </div>

          <h1 className="font-serif text-4xl text-luna-base mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            El Misterio de la Luna
          </h1>
          <p className="font-sans text-luna-base/80 text-sm max-w-xs mx-auto reveal-text tracking-wide">
            Jabonería Artesanal hecha con magia, intención y naturaleza.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex justify-center gap-4 reveal-text">
            <a href="https://instagram.com/lunaserena.ec" target="_blank" rel="noreferrer" className="text-luna-base hover:text-luna-gold transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal-text">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'natural', label: 'Natural' },
            { id: 'esoterico', label: 'Esotéricos' },
            { id: 'temporada', label: 'Temporada' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-serif tracking-wider border transition-all ${filter === f.id
                  ? 'bg-luna-base text-luna-night border-luna-base font-bold'
                  : 'bg-transparent text-luna-base/70 border-luna-base/30 hover:bg-luna-base/10'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 pb-24">
          {filteredProducts.map((product) => (
            <div key={product.id} className="reveal-card">
              <ProductCard
                product={product}
                onClick={setSelectedProduct}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40 bg-gradient-to-t from-luna-night via-luna-night/95 to-transparent">
        <button
          onClick={handleGeneralOrder}
          className="w-full bg-green-700/90 backdrop-blur-sm text-white font-serif py-4 rounded-xl shadow-[0_0_20px_rgba(21,128,61,0.4)] border border-green-600/50 flex items-center justify-center gap-2 hover:bg-green-700 transition transform active:scale-95"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
          Hacer Pedido por WhatsApp
        </button>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrder={handleOrder}
      />
    </div>
  );
}

export default App;