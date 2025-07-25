// src/pages/NotFound.jsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center"
    >
      <h1
        ref={textRef}
        className="text-6xl font-bold mb-6 text-red-500"
      >
        404
      </h1>
      <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="text-blue-400 underline hover:text-blue-300 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
