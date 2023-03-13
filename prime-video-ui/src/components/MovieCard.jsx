import styled from "styled-components";
import { TbPlayerPlay } from "react-icons/tb";
import { RiAddFill } from "react-icons/ri";
import { GoCircleSlash } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function MovieCard(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="movie-card" onClick={()=>navigate("/details")}>
        <div className="img-box">
          <span className="card-logo">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg"
              alt="logo"
            />
          </span>
          <img className="poster" src={props.poster} alt={props.title} />
          <div className="content">
            <div className="action-btn">
              <button>
                <TbPlayerPlay fill="#fff" />
              </button>
              <span className="season-title">Play S1 E1</span>
              <button>
                <TbPlayerPlay />
              </button>
              <button>
                <RiAddFill />
              </button>
              <button>
                <GoCircleSlash />
              </button>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">{props.title}</h3>
              <p className="movie-desc">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .movie-card {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    height: 180px;
    /* height: 300px; */
    width: 300px;
    background-color: var(--movie-card-bg-color);
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
      top: -55px;
      height: 300px;
      border: 3px solid var(--btn-primary-bg-color);
      .content {
        transform: translate(0);
      }
    }
    .img-box {
      overflow: hidden;
      position: relative;
      transition: all 0.3s;
      .card-logo {
        position: absolute;
      }
      .poster {
        object-fit: cover;
        height: 180px;
        width: 300px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: linear-gradient(
        to top,
        var(--movie-card-bg-color) 80%,
        transparent
      );
      position: relative;
      top: -50px;
      cursor: default;
      transform: translateY(40px);
      transition: all 0.3s;
      .action-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
        .season-title {
          margin-left: 5px;
          margin-right: 10px;
        }
        button {
          font-size: 1.8rem;
          line-height: 1.8rem;
          border-radius: 50%;
          border: none;
          background-color: transparent;
          color: #fff;
          display: flex;
          height: 40px;
          width: 40px;
          align-items: center;
          cursor: pointer;
          justify-content: center;
          transition: all 0.3s;
          &:nth-child(1) {
            background-color: #000;
            border: 2px solid #fff;
            font-size: 1.2rem;
            &:hover {
              background-color: var(--btn-primary-bg-color);
              border-color: var(--btn-primary-bg-color);
            }
          }
        }
      }
      .movie-info {
        display: flex;
        flex-direction: column;
        .movie-title {
          font-size: 1rem;
          font-weight: 500;
        }
        .movie-desc{
          font-size: 0.7rem;
          font-weight: 400;
        }
      }
    }
  }
`;
