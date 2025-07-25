import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import iPhoneModel from '../utils/iPhoneModel'; // <- Make sure this file exports an array of 50+ iPhone objects

const INITIAL_LOAD = 10;
const LOAD_INCREMENT = 5;

const ProductCard = ({ data }) => (
  <div className="card bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col border border-gray-700 transition-transform duration-300 hover:transform hover:-translate-y-2">
    <div className="card-img-container aspect-square w-full overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/400x400/ef4444/ffffff?text=Image+Error';
        }}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h2 className="text-xl font-bold text-white mb-2 flex-grow">{data.name}</h2>
      <p className="text-gray-400 text-sm mb-4">{data.description}</p>
      <p className="text-2xl font-semibold text-blue-400 mt-auto">${data.price.toLocaleString()}</p>
    </div>
  </div>
);

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <div
      className="loader ease-linear rounded-full border-4 border-t-4 border-gray-500 h-12 w-12"
      style={{ borderTopColor: '#3498db', animation: 'spin 1s linear infinite' }}
    ></div>
  </div>
);

export default function ProductPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    setTimeout(() => {
      const currentLength = items.length;
      const newItems = iPhoneModel.slice(currentLength, currentLength + LOAD_INCREMENT);
      setItems((prev) => [...prev, ...newItems]);

      if (currentLength + newItems.length >= iPhoneModel.length) {
        setHasMore(false);
      }

      setIsLoading(false);
      setTimeout(() => {
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      }, 100);
    }, 800);
  };

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    const ctx = window.gsap.context(() => {
      const cards = window.gsap.utils.toArray('.card:not(.animated)');
      cards.forEach((card, i) => {
        window.gsap.to(card, {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
          onComplete: () => card.classList.add('animated'),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  useEffect(() => {
    setItems(iPhoneModel.slice(0, INITIAL_LOAD));

    if (!window.gsap || !window.ScrollTrigger) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    const scrollTrigger = window.ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'bottom bottom',
      onEnter: () => loadMore(),
    });

    return () => scrollTrigger.kill();
  }, []);

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif; background-color: #111827; color: #f9fafb; }
        .card { opacity: 0; transform: translateY(50px); visibility: hidden; }
        .card-img-container { background-color: #374151; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="antialiased">
        <header className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">iPhone Showcase</h1>
          <p className="mt-4 text-lg text-gray-400">Scroll down to explore the collection.</p>
        </header>

        <main ref={containerRef} className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((iphone) => (
              <ProductCard key={iphone.id} data={iphone} />
            ))}
          </div>
        </main>

        {isLoading && <Loader />}

        {!hasMore && (
          <div className="text-center text-gray-500 py-8">
            <p>You've reached the end of the list!</p>
          </div>
        )}
      </div>
    </>
  );
}
