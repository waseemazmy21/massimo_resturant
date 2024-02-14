import { useState, useEffect } from 'react';
import { slides } from '../lib/data';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex-[1_0_0%] flex items-center justify-center flex-col gap-8 p-4 text-red-500 font-bold">
        <h1 className="text-2xl text-center uppercase">
          {slides[currentSlide].title}
        </h1>
        <button className="bg-red-500 hover:bg-red-500/85 rounded-2xl text-white py-4 px-8">
          Order Now
        </button>
      </div>
      <div className="flex-[1_0_0%] overflow-hidden">
        <img
          src={slides[currentSlide].imageURL}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
