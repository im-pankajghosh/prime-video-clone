import React from "react";
import styled from "styled-components";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { MdOutlineSubtitles } from "react-icons/md";

export default function Card(props) {
  return (
    <Container>
      <div className="card flex">
        <div className="img-box a-center j-center">
          <img src={props.cover} alt="movie" />
        </div>
        <div className="content flex j-center">
          <div className="details flex column j-center">
            <div className="play-btn flex a-center j-between">
              <button className="flex a-center j-center">
                <BiPlay />
              </button>
              <span className="flex a-center j-center">Play S1 E1</span>
              <button className="flex a-center j-center">
                <BiPlay />
              </button>
              <button className="flex a-center j-center">
                <AiOutlinePlus />
              </button>
              <button className="flex a-center j-center">
                <GoCircleSlash />
              </button>
            </div>
            <h3>Included with Prime</h3>
            <p>
              <span className="header">{props.movieName}</span>
              <br />{props.movieDetails}... <br />
              <span className="footer flex a-center">
                {props.releaseDate} <MdOutlineSubtitles />
                <span>{props.ageRestriction}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .card {
    position: relative;
    top: 0;
    background-color: var(--card-bg-color);
    height: 170px;
    width: 300px;
    border-radius: 0.3rem;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
      top: 0;
      height: 400px;
      border: 2px solid var(--btn-primary-bg-color);
      z-index: 2;
      .img-box {
        height: 170px;
        z-index: 0;
      }
      .content {
        transform: translateY(0);
      }
    }
    .img-box {
      position: absolute;
      width: 100%;
      height: 170px;
      top: 0;
      left: 0;
      background-color: #222;
      border-radius: 0.3rem;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, var(--movie-card-bg-color) 60%, transparent 70%);
      align-items: flex-end;
      overflow: hidden;
      transition: all 0.3s;
      transform: translateY(300px);
      .details {
        padding: 1rem;
        width: 100%;
        cursor: default;
        transition: all 0.3s;
        .play-btn {
          width: 100%;
          button {
            background-color: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1.8rem;
            &:nth-child(1) {
              border: 2px solid #fff;
              background-color: #000;
              border-radius: 50%;
              padding: 0.2rem;
              &:hover {
                background-color: var(--btn-primary-bg-color);
                border-color: var(--btn-primary-bg-color);
              }
            }
            &:nth-child(3) {
              font-size: 2.5rem;
              path {
                stroke-width: 1px;
                fill: none;
              }
            }
          }
        }
      }
      h3 {
        font-weight: 500;
        font-size: 1rem;
        padding: 1rem 0;
        color: #1783d6;
      }
      p {
        font-size: 0.8rem;
        .header {
          font-weight: 600;
          font-size: 1rem;
          line-height: 2;
        }
        .footer {
          font-size: 1rem;
          line-height: 2rem;
          gap: 0.5rem;
          svg {
            font-size: 1.5rem;
          }
          span {
            border: 1px solid #fff;
            padding: 0;
            line-height: 0.8rem;
            font-weight: 600;
            padding: 0.2rem 0.3rem;
            font-size: 0.8rem;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;
