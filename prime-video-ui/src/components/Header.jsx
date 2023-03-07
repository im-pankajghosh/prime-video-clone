import React from "react";
import styled from "styled-components";

export default function Header(props) {
  return (
    <Container>
      <header className="flex">
        <div className="content flex column">{props.children}</div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    height: 100%;
    box-sizing: border-box;
    justify-content: center;
    background: linear-gradient(to right, #000 40%, transparent 60%),
      url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg);
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    transition: 0.5s;
    .content {
      position: absolute;
      top: 10%;
      left: 0;
      gap: 1rem;
      width: 50%;
      padding: 3rem;
      h1 {
        font-size: 2.9rem;
        line-height: 3rem;
        font-weight: 300;
      }
      p {
        font-size: 1.4rem;
        line-height: 1.5rem;
        font-weight: 300;
      }
      button {
        font-weight: 500;
        color: #fff;
        background-color: var(--btn-primary-bg-color);
        border: none;
        padding: 0.8rem;
        width: 300px;
        &:hover {
          background-color: var(--btn-primary-hover-bg-color);
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    header {
      min-height: 70vh;
      justify-content: center;
      background: linear-gradient(to top, #000 60%, transparent 70%),
        url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg);
      background-size: 100%;
      .content {
        top: 40%;
        text-align: center;
        padding: 0.5rem;
        width: 100%;
        h1 {
          font-size: 1.8rem;
          line-height: 1.9rem;
          font-weight: 400;
        }
        p {
          font-size: 0.8rem;
          line-height: 0.9rem;
        }
        button {
          padding: 0.5rem;
          width: 100%;
        }
      }
    }
  }
`;
