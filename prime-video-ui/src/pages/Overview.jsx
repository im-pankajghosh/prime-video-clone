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
      <Header>
        <h1>Welcome to Prime Video</h1>
        <p>
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </p>
        <Buttoncontrol
          label="Sign in to join"
          onClick={() => navigate("/signin")}
        />
      </Header>
      <Section variant="rent-movie">
        <h2>Movie rentals on Prime Video</h2>
        <p>Early Access to new movies, before digital subscription</p>
        <Buttoncontrol label="Rent now" onClick={() => navigate("/signin")} />
      </Section>
      <Section variant="channels">
        <div className="face details flex column">
          <h2>Your favorite channels all in one place</h2>
          <p>
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="face channel flex">
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"
              alt="LionsgatePlay"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"
              alt="Discovery"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"
              alt="Erosnow"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"
              alt="MANORAMAMAX"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"
              alt="hoichoi"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png"
              alt="Vrott"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png"
              alt="Amc"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"
              alt="Docubay"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"
              alt="Mubi"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/iWonder.png"
              alt="iWonder"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png"
              alt="Stingray"
            />
          </div>
          <div className="logo">
            <img
              src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/426x294_ShortsTV.jpg"
              alt="ShortsTV"
            />
          </div>
        </div>
      </Section>
      <Section variant="tv-stick">
        <h2>Even better with Fire TV Stick</h2>
        <p>
          The biggest movies and TV shows are always better on a big screen.
          Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press
          the voice button on the remote and say the name of the title you want
          to watch to find it in seconds.
        </p>
        <Buttoncontrol
          label="Get started"
          onClick={() => navigate("/signin")}
        />
      </Section>
      <Section variant="family-friendly">
        <h2>Family Friendly</h2>
        <p>
          With easy to use Parental Controls and a dedicated kids page, enjoy
          secure, ad-free kids entertainment. Kids can enjoy popular TV shows
          like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
        </p>
        <Buttoncontrol
          label="Get started"
          onClick={() => navigate("/signin")}
        />
      </Section>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  #rent-movie {
    background: linear-gradient(to right, #000 40%, transparent 60%),
      url(https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg);
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
  }
  #channels {
    background-color: #fff;
    .content {
      width: 100%;
      height: 100%;
      flex-direction: row !important;
      height: fit-content;
      .face {
        width: 50%;
        height: fit-content;
        color: var(--font-color-dark);
        box-sizing: border-box;
        transition: 0.5s;
      }
      .details {
        gap: 2rem;
        h2 {
          font-size: 2.9rem;
          font-weight: 300;
        }
        p {
          font-size: 1.6rem;
        }
      }
      .channel {
        flex-wrap: wrap;
        gap: 0.3rem;
        justify-content: space-between;
        .logo {
          height: 90px;
          width: 145px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.2s;
          img {
            height: 90px;
            width: 145px;
          }
          &:hover {
            box-shadow: 0 0 6px 4px #000000e6;
          }
        }
      }
    }
  }
  #tv-stick {
    background: linear-gradient(to left, #000 40%, transparent 60%),
      url(https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left.jpg);
    background-size: cover;
    background-position: right left;
    background-repeat: no-repeat;
    .content {
      right: 0;
    }
  }
  #family-friendly {
    background: linear-gradient(to right, #000 40%, transparent 60%),
      url(https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg);
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 500px) {
    #rent-movie {
      background: linear-gradient(to top, #000 60%, transparent 70%),
        url(https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    #channels {
      background-color: #fff;
      height: 200vh;
      .content {
        top: 0;
        flex-direction: column !important;
        height: 100%;
        padding: 1rem;
        .face {
          width: 100%;
        }
        .details {
          gap: 2rem;
          h2 {
            line-height: 3rem;
          }
          p {
            font-size: 1.6rem;
            line-height: 1.8rem;
          }
        }
        .channel {
          gap: 0.5rem;
          .logo {
            width: 220px;
            height: 130px;
            img {
              width: 220px;
              height: 130px;
            }
          }
        }
      }
    }
    #tv-stick {
      background: linear-gradient(to top, #000 50%, transparent 70%),
        url(https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    #family-friendly {
      background: linear-gradient(to top, #000 50%, transparent 70%),
        url(https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg);
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
  @media screen and (max-width: 480px) {
    #channels {
      height: 170vh;
      .content {
        .channel {
          gap: 0.5rem;
          .logo {
            width: 160px;
            height: 110px;
            img {
              width: 160px;
              height: 110px;
            }
          }
        }
      }
    }
  }
`;
