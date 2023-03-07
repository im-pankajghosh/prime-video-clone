import styled from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import banner1 from "../assets/banner/home1.jpeg";
import banner2 from "../assets/banner/home2.jpeg";
import banner3 from "../assets/banner/home3.jpeg";
import banner4 from "../assets/banner/home4.jpeg";
import banner5 from "../assets/banner/home5.jpeg";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Card from "../components/Card";
import card1 from "../assets/cards/card-1.webp";
import card2 from "../assets/cards/card-2.webp";
import card3 from "../assets/cards/card-3.webp";

export default function Primevideo(props) {
  const Slides = [banner1, banner2, banner3, banner4, banner5];
  const Cards = [card1, card2, card3];

  return (
    <Container>
      <Navbar />
      <Slider>
        {Slides.map((s) => (
          <img src={s} alt="banner" />
        ))}
      </Slider>
      <Section>
        <h3>Populer Movies</h3>
        <div className="movie-list flex">
          <Card
            cover={card1}
            movieName="Eken Babu(Bengali) - Season 1"
            movieDetails="Hoichoi Originals presents ‘Eken Babu’ featuring a man with a quirky persona, who lands up in an apartment in Bangalore, mu"
            releaseDate="2018"
            ageRestriction="U/A 7+"
          />
          <Card
            cover={card2}
            movieName="Minus One Season 1"
            movieDetails="Riya (Aisha Ahmed) and Varun (Ayush Mehra) used to live together as a couple in New Delhi. but then they broke up. Now they liv"
            releaseDate="2019"
            ageRestriction="A"
          />
          <Card
            cover={card3}
            movieName="Dublin Murders Season 1"
            movieDetails="In 2006, Dublin detectives Rob Reilly and Cassie Maddox investigate a child’s murder."
            releaseDate="2021"
            ageRestriction="U/A 16+"
          />
        </div>
      </Section>
      <Section>
        <h3>Trending Movies</h3>
        <div className="movie-list flex">
          <Card
            cover={card2}
            movieName="Minus One Season 1"
            movieDetails="Riya (Aisha Ahmed) and Varun (Ayush Mehra) used to live together as a couple in New Delhi. but then they broke up. Now they liv"
            releaseDate="2019"
            ageRestriction="A"
          />
          <Card
            cover={card3}
            movieName="Dublin Murders Season 1"
            movieDetails="In 2006, Dublin detectives Rob Reilly and Cassie Maddox investigate a child’s murder."
            releaseDate="2021"
            ageRestriction="U/A 16+"
          />
          <Card
            cover={card1}
            movieName="Eken Babu(Bengali) - Season 1"
            movieDetails="Hoichoi Originals presents ‘Eken Babu’ featuring a man with a quirky persona, who lands up in an apartment in Bangalore, mu"
            releaseDate="2018"
            ageRestriction="7+"
          />
        </div>
      </Section>
      <Section>
        <h3>Top 3 Movies</h3>
        <div className="movie-list flex">
          <Card
            cover={card3}
            movieName="Dublin Murders Season 1"
            movieDetails="In 2006, Dublin detectives Rob Reilly and Cassie Maddox investigate a child’s murder."
            releaseDate="2021"
            ageRestriction="U/A 16+"
          />
          <Card
            cover={card1}
            movieName="Eken Babu(Bengali) - Season 1"
            movieDetails="Hoichoi Originals presents ‘Eken Babu’ featuring a man with a quirky persona, who lands up in an apartment in Bangalore, mu"
            releaseDate="2018"
            ageRestriction="7+"
          />
          <Card
            cover={card2}
            movieName="Minus One Season 1"
            movieDetails="Riya (Aisha Ahmed) and Varun (Ayush Mehra) used to live together as a couple in New Delhi. but then they broke up. Now they liv"
            releaseDate="2019"
            ageRestriction="A"
          />
        </div>
      </Section>
      <Section>
        <h3>Most Watched</h3>
        <div className="movie-list flex">
          <Card
            cover={card1}
            movieName="Eken Babu(Bengali) - Season 1"
            movieDetails="Hoichoi Originals presents ‘Eken Babu’ featuring a man with a quirky persona, who lands up in an apartment in Bangalore, mu"
            releaseDate="2018"
            ageRestriction="7+"
          />
          <Card
            cover={card3}
            movieName="Dublin Murders Season 1"
            movieDetails="In 2006, Dublin detectives Rob Reilly and Cassie Maddox investigate a child’s murder."
            releaseDate="2021"
            ageRestriction="U/A 16+"
          />
          <Card
            cover={card2}
            movieName="Minus One Season 1"
            movieDetails="Riya (Aisha Ahmed) and Varun (Ayush Mehra) used to live together as a couple in New Delhi. but then they broke up. Now they liv"
            releaseDate="2019"
            ageRestriction="A"
          />
        </div>
      </Section>
      <Slider>
        {Slides.map((s) => (
          <img src={s} alt="banner" />
        ))}
      </Slider>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  section {
    align-items: center;
    background-color: var(--movie-list-bg-color);
    padding: 1rem 2rem;
    .content {
      h3 {
        font-weight: 500;
      }
      .movie-list {
        gap: 1rem;
        position: relative;
      }
    }
  }
  footer {
    background-color: var(--movie-list-bg-color);
  }
`;
