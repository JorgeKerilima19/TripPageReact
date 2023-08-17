import { useCallback, useEffect, useRef, useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const popularTours = [
  {
    name: "MachuPicchu",
    url: "/service/peru/1",
    src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Rio de Janeiro",
    url: "/service/brasil/1",
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Cartagena",
    url: "/service/colombia/1",
    src: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Buenos Aires",
    url: "/service/argentina/1",
    src: "https://images.unsplash.com/photo-1495317823589-e67efe1524b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

const ServicesSlider = () => {
  const timer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = useCallback(() => {
    const lastSlide = currentIndex === popularTours.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, popularTours]);
  const previousSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? popularTours.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    };
  }, [nextSlide]);

  return (
    <div className="slider__container width__full ps__relative">
      <div
        style={{ backgroundImage: `url(${popularTours[currentIndex].src})` }}
        className="slider__item-container ps__relative"
      ></div>
      <AiOutlineArrowLeft
        onClick={previousSlide}
        className="slider__arrow-left"
      />
      <AiOutlineArrowRight
        onClick={nextSlide}
        className="slider__arrow-right"
      />
      <div className="slider__dot-container">
        {popularTours.map((el, index) => (
          <span
            key={el.name}
            onClick={() => {
              goToSlide(index);
            }}
            className="slider__dot"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
