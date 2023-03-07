import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Slider({
  children: Slides
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevClickHandler = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? Slides.length - 1 : currentSlide - 1
    );
  };

  const nextClickHandler = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === Slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <Container>
      <div
        className="slider flex a-center"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides}
      </div>
      <div className="slide-buttons flex a-center j-between">
        <button id="btn-left" onClick={prevClickHandler}>
          <BsChevronLeft />
        </button>
        <button id="btn-right" onClick={nextClickHandler}>
          <BsChevronRight />
        </button>
      </div>
      <div className="radio-buttons">
        <div className="container flex a-center j-center">
          {Slides.map((_, i) => (
            <div
              className={`indicator ${
                currentSlide === i ? "opacity-100" : "opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  overflow: hidden;
  .slider {
    min-width: 100vw;
    width: 100%;
    height: fit-content;
    transition: ease-out 0.5s;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .slide-buttons {
    position: absolute;
    top: 0;
    inset: 0;
    button {
      border: none;
      height: 100%;
      cursor: pointer;
      background-color: transparent;
      background: none;
      transition: all 0.5s;
      svg {
        font-size: 2.5rem;
        color: #fff;
      }
    }
  }

  .radio-buttons {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4%;
    .container {
      gap: 0.5rem;
      .indicator {
        transition: all;
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
`;
