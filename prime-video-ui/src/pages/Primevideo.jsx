import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import banner1 from "../assets/banner/home1.jpeg";
import banner2 from "../assets/banner/home2.jpeg";
import banner3 from "../assets/banner/home3.jpeg";
import banner4 from "../assets/banner/home4.jpeg";
import banner5 from "../assets/banner/home5.jpeg";
import Footer from "../components/Footer";
import MovieListSlider from "../components/MovieListSlider";

export default function Primevideo(props) {
  const Slides = [banner1, banner2, banner3, banner4, banner5];

  return (
    <Container>
      <Navbar />
      <Slider>
        {Slides.map((s) => (
          <img src={s} alt="banner" />
        ))}
      </Slider>
      <MovieListSlider name="Recomended Movie"/>
      <MovieListSlider name="Continue to Watch"/>
      <MovieListSlider name="Populer Movies"/>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  footer {
    background-color: var(--movie-list-bg-color);
  }
`;
