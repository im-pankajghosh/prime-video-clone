import styled from "styled-components";
import Buttoncontrol from "../components/Buttoncontrol";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { TbPlayerPlay } from "react-icons/tb";
import { RiAddFill } from "react-icons/ri";
import { MdOutlineCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Details(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      <Section>
        <video
          src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/aa6b/9431/3dee/4abd-997d-bbe7101a55c0/8eac6d78-ca60-4de1-a200-95f325f23385_video_720p_4000kbps_audio_aaclc_128kbps.mp4"
          autoPlay
          loop
          muted
        />
        <div className="movie-details">
          <h2 className="movie-title">Farzi</h2>
          <div className="action-btn flex a-center">
            <Buttoncontrol
              label="Watch with Prime"
              onClick={() => navigate("/watch")}
            />
            <button className="circuler-btn">
              <TbPlayerPlay />
            </button>
            <button className="circuler-btn">
              <RiAddFill />
            </button>
            <button className="circuler-btn">
              <MdOutlineCelebration />
            </button>
          </div>
          <div className="movie-info">
            <p className="movie-desc">
              Sunny, a brilliant small-time artist is catapulted into the
              high-stakes world of counterfeiting when he creates the perfect
              fake currency note, even as Michael, a fiery, unorthodox task
              force officer wants to rid the country of the counterfeiting
              menace. In this thrilling cat-and-mouse race, losing is not an
              option!
            </p>
            <p className="movie-cast">
              <p className="cast">
                <span>Starring</span>Shahid Kapoor, Vijay Sethupathi, Kay Kay
                Menon
              </p>
              <p className="cast">
                <span>Genres</span>Suspense, Drama
              </p>
              <p>
                <span>Subtitles</span>English, हिन्दी, more...
              </p>
              <p>
                <span>Audio languages</span>ಕನ್ನಡ, हिन्दी, more...
              </p>
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  section {
    justify-content: space-between;
    background-color: var(--movie-list-bg-color);
    .content {
      cursor: default;
      width: 100%;
      video {
        position: absolute;
        top: 0;
        right: 0;
        height: 50vh;
        transition: all 0.5s;
      }
      .sound-btn {
        position: absolute;
        right: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        font-size: 1.8rem;
        line-height: 2rem;
        border-radius: 50%;
        background-color: #51657c;
        color: #e0e0e0;
        z-index: 60;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #fff;
          background-color: #6c849e;
        }
      }
      .movie-details {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        min-height: 50vh;
        padding: 80px 30px;
        background: linear-gradient(
            to right,
            var(--movie-list-bg-color) 42%,
            #0f171e16
          ),
          linear-gradient(to top, var(--movie-list-bg-color) 40%, #0f171e1c);
        transition: all 0.5s;
        .movie-title {
          font-size: 2rem;
        }
        .action-btn {
          gap: 10px;
          button {
            padding: 20px 0;
            width: 160px;
            cursor: pointer;
            &.circuler-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 45px;
              height: 45px;
              font-size: 1.8rem;
              line-height: 2rem;
              border-radius: 50%;
              background-color: #51657c;
              color: #e0e0e0;
              transition: all 0.3s;
              &:hover {
                color: #fff;
                background-color: #6c849e;
              }
            }
            &:nth-child(1) {
              margin-right: 20px;
            }
          }
        }
        .movie-info {
          width: 80%;
          .movie-desc {
            font-size: 0.9rem;
            line-height: 1.2rem;
            font-weight: 500;
            margin-bottom: 10px;
          }
          .movie-cast {
            p {
              font-size: 1rem;
              font-weight: 500;
              display: flex;
              color: #6c849e;
              span {
                display: flex;
                width: 180px;
                font-size: 1.1rem;
              }
              &.cast {
                color: var(--btn-primary-bg-color);
                span {
                  color: #6c849e;
                }
              }
            }
          }
        }
      }
    }
  }
  footer {
    background-color: var(--movie-list-bg-color);
  }
  @media screen and (max-width: 500px) {
    section {
      .content {
        top: 0;
        left: 0;
        text-align: left;
        video {
          height: 30vh;
        }
        .movie-details {
          width: 100%;
          padding: 50px 20px;
          background: linear-gradient(
              to right,
              var(--movie-list-bg-color) 32%,
              #0f171e16
            ),
            linear-gradient(to top, var(--movie-list-bg-color) 60%, #0f171e1c);
          .movie-info {
            width: 100%;
            .movie-cast {
              display: flex;
              flex-direction: column;
              gap: 8px;
              p {
                font-size: 0.9rem;
                span {
                  width: 150px;
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;
