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
  return (
    <div className="slider__container width__full flex__column flex flex__item-center ps__relative">
      {popularTours.map((el) => (
        <div className="slider__item-container flex flex__sp-center">
          <img className="slider__item-img" src={el.src} />
        </div>
      ))}
      <AiOutlineArrowLeft className="slider__arrow-left" />
      <AiOutlineArrowRight className="slider__arrow-right" />
    </div>
  );
};

export default ServicesSlider;
