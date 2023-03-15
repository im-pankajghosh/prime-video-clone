import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import MovieCard from "./MovieCard";

export default function MovieListSlider(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const movieListRef = useRef();

  const clickHandle = (direction) => {
    let distance = movieListRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      movieListRef.current.style.transform = `translateX(${310 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      setShowLeftArrow(true);
      movieListRef.current.style.transform = `translateX(${-310 + distance}px)`;
    }
  };
  return (
    <Container>
      <div className="movie-list-slider flex column">
        <span className="movie-list-title">{props.name}</span>
        <div className="wrapper">
          {showLeftArrow && (
            <BsChevronLeft
              className="slider-arrow left"
              onClick={() => clickHandle("left")}
            />
          )}
          <div className="movie-list flex" ref={movieListRef}>
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/36cd94ed93469859c08793bb43bc36ce1332edfa4c74a0eb2c30b4399de36ccc._UR1920,1080_UX400_UY225_.jpg"
              video="https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/fcd5/12e8/3010/43ee-b3bb-924dc77f43c9/f7ddd555-47e0-416c-9a0d-a7f0f410d9ec_video_720p_4000kbps_audio_aaclc_128kbps.mp4"
              title="Farzi"
              desc="Sunny, a brilliant small-time artist is catapulted into the high-stakes world of counterfeiting when he creates the perfec..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/d6482cd5d57076064a467a0bf30502967dc85d936fae85c8e1d641dfc5878eb5._UR1920,1080_UX400_UY225_.jpg"
              title="The Consultant"
              desc="After an unspeakable tragedy at CompWare, a games studio based in downtown Los Angeles, a mysterious consultant, Regus..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/f447f7b124e6c785d64c0772f46841159b8f58ab9fdf3a6489bd7fbdf2c37a51._UR1920,1080_UX400_UY225_.jpg"
              title="The Family Man"
              desc="Srikant Tiwari has quit TASC and works in the private sector to spend more time with the family. A powerful new enemy forces..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/5ad27df6dda76791d1f5d57461fc235ff01835174925d15b39e50955d7bdb488._UR1920,1080_UX400_UY225_.png"
              title="Citadel"
              desc="Eight years ago, Citadel, an independent global spy agency, was destroyed by a new syndicate, Manticore. With their memories..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/7d4343a4ca38a5d8db1226e1cbdfab7e96a0fafd948f5feced6303089d7ee352._UR1920,1080_UX400_UY225_.jpg"
              title="Happy Family Conditions Apply"
              desc="Happy Family: Conditions Apply is a light-hearted, family comedy which follows the lives of Dholakias, a joint-family comprisin..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/1daab4dad0c74436127b2fae7c765616e769cdcbc152416d2992452596714bbb._UR1920,1080_UX400_UY225_.jpg"
              title="Breathe: Into The Shadows"
              desc="J’s existence and ideology re-emerge as he sets out to finish what he started, leading Avinash to confront his merging dual..."
            />
            <MovieCard
              poster="https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/THE_BOYS_S1/en_US/COVER_ART/CLEAN/BUTCHER._UR1920,1080_UX400_UY225_.jpg"
              title="The Boys"
              desc="In a world where superheroes embrace the darker side of their massive celebrity and fame, THE BOYS centers on a group of..."
            />
            <MovieCard
              poster="https://m.media-amazon.com/images/S/pv-target-images/2ad1870c721abfd7be37b6b610c03f30f737416662b3723c9bd71dc044743d66._UR1920,1080_UX400_UY225_.jpg"
              title="Mirzapur"
              desc="In Mirzapur, revenge runs darker than blood. There is one title, the King of Mirzapur, but many takers. Munna feels invincible after..."
            />
          </div>
          <BsChevronRight
            className="slider-arrow right"
            onClick={() => clickHandle("right")}
          />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .movie-list-slider {
    background-color: var(--movie-list-bg-color);
    padding-top: 30px;
    gap: 10px;
    .movie-list-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-left: 50px;
    }
    .wrapper {
      position: relative;
      .slider-arrow {
        height: 100%;
        width: 50px;
        background-color: #00000067;
        position: absolute;
        top: 0;
        z-index: 50;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          background-color: #000000b3;
        }
        &.left {
          left: 0;
        }
        &.right {
          right: 0;
        }
      }
      .movie-list {
        gap: 10px;
        position: relative;
        margin-left: 50px;
        height: 180px;
        width: max-content;
        transform: translateX(0);
        transition: all 0.5s;
      }
    }
  }
`;
