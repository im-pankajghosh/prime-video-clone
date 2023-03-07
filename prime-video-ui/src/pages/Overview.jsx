import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Buttoncontrol from "../components/Buttoncontrol";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Overview() {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      {/* <Header>
        <h1>Welcome to Prime Video</h1>
        <p>
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </p>
        <Buttoncontrol
          label="Sign in to join"
          onClick={() => navigate("/")}
        />
      </Header>
      <Section variant="rent-section">
        <h3>Movie rentals on Prime Video</h3>
        <p>Early Access to new movies, before digital subscription</p>
        <Buttoncontrol label="Rent now" onClick={() => navigate("/")} />
      </Section>
      <Section variant="channel-section">
        <div className="details flex column a-center">
          <h3>Your favorite channels all in one place</h3>
          <p>
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="channels flex column j-between">
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"
              alt="LionsgatePlay"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"
              alt="MANORAMAMAX"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png"
              alt="Amc"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/iWonder.png"
              alt="iWonder"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"
              alt="Discovery"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"
              alt="hoichoi"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"
              alt="Docubay"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"
              alt="Stingray"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"
              alt="Erosnow"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"
              alt="Vrott"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"
              alt="Mubi"
            />
          </div>
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/426x294_ShortsTV.jpg"
              alt="ShortsTV"
            />
          </div>
        </div>
      </Section>
      <Section variant="tv-stick-section">
        <h3>Even better with Fire TV Stick</h3>
        <p>
          The biggest movies and TV shows are always better on a big screen.
          Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press
          the voice button on the remote and say the name of the title you want
          to watch to find it in seconds.
        </p>
        <Buttoncontrol
          label="Get started"
          onClick={() => navigate("/")}
        />
      </Section>
      <Section variant="family-section">
        <h3>Family Friendly</h3>
        <p>
          With easy to use Parental Controls and a dedicated kids page, enjoy
          secure, ad-free kids entertainment. Kids can enjoy popular TV shows
          like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
        </p>
        <Buttoncontrol
          label="Get started"
          onClick={() => navigate("/")}
        />
      </Section>
      <Footer /> */}
    </Container>
  );
}
const Container = styled.div`
  header {
    background-image: linear-gradient(to right, #000 45%, transparent 70%),
      url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg);
    background-size: cover;
    background-position: right top;
  }
  #rent-section {
    height: 80vh;
    background-image: linear-gradient(to left, #000 40%, transparent 70%),
      url(https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left.jpg);
    background-size: cover;
    background-position: top left;
    .content {
      top: 5%;
      right: 0;
      width: 50%;
    }
  }

  #channel-section {
    height: 70vh;
    background-color: #fff;
    color: #000;
    background-size: cover;
    background-position: top left;
    .content {
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      flex-direction: row !important;
      padding: 1rem 3rem;
      .details {
        width: 45%;
        padding: 1rem 0;
        gap: 2rem;
        h3 {
          font-size: 2.9rem;
          line-height: 3rem;
          font-weight: 300;
        }
        p {
          font-size: 1.46rem;
        }
      }
      .channels {
        min-width: 50%;
        align-items: center;
        width: fit-content;
        box-sizing: border-box;
        flex-wrap: wrap;
        .logo {
          width: 145px;
          height: 95px;
          cursor: pointer;
          object-fit: cover;
          overflow: hidden;
          transition: 0.2s;
          &:hover {
            box-shadow: 0 0 6px 4px #000000ea;
          }
          img {
            width: 145px;
            height: 95px;
          }
        }
      }
    }
  }

  #tv-stick-section {
    height: 80vh;
    background-image: linear-gradient(to left, #000 40%, transparent 70%),
      url(https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left.jpg);
    background-size: cover;
    background-position: top left;
    .content {
      top: 2%;
      right: 0;
      width: 50%;
    }
  }
  #family-section {
    height: 80vh;
    background-image: linear-gradient(to right, #000 40%, transparent 70%),
      url(https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg);
    background-size: cover;
    background-position: top right;
    .content {
      top: 5%;
      left: 0;
      width: 50%;
    }
  }
`;
