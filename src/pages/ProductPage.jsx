import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import iPhoneModel from "../utils/iPhoneModel"; // <- Make sure this file exports an array of 50+ iPhone objects

const INITIAL_LOAD = 10;
const LOAD_INCREMENT = 5;

const ProductCard = ({ data }) => (
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        class="p-8 rounded-t-lg"
        src={data.image}
        alt="product image"
      />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         {data.name}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <a
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </a>
      </div>
    </div>
  </div>
);

const Loader = () => (
  <div className="flex justify-center items-center py-8">
    <div
      className="loader ease-linear rounded-full border-4 border-t-4 border-gray-500 h-12 w-12"
      style={{
        borderTopColor: "#3498db",
        animation: "spin 1s linear infinite",
      }}
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
      const newItems = iPhoneModel.slice(
        currentLength,
        currentLength + LOAD_INCREMENT
      );
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
      const cards = window.gsap.utils.toArray(".card:not(.animated)");
      cards.forEach((card, i) => {
        window.gsap.to(card, {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
          onComplete: () => card.classList.add("animated"),
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
      start: "bottom bottom",
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            iPhone Showcase
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Scroll down to explore the collection.
          </p>
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
