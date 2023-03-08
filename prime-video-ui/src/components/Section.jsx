import React from "react";
import styled from "styled-components";

export default function Section(props) {
  return (
    <Container>
      <section id={props.variant}>
        <div className="content flex column">{props.children}</div>
      </section>
    </Container>
  );
}
const Container = styled.div`
    section {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    min-height: 80vh;
    height: 100%;
    box-sizing: border-box;
    justify-content: center;
    transition: 0.5s;
    .content {
      position: absolute;
      top: 0;
      gap: 1rem;
      width: 50%;
      padding: 3rem;
      h2 {
        font-size: 2.5rem;
        line-height: 2.8rem;
        font-weight: 400;
      }
      p {
        font-size: 1.4rem;
        line-height: 1.8rem;
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
    section {
      min-height: 80vh;
      justify-content: center;
      .content {
        top: 50%;
        text-align: center;
        padding: 0.5rem;
        width: 100%;
        min-height: fit-content;
        h2 {
          font-size: 1.8rem;
          line-height: 1.9rem;
        }
        p {
          font-size: 0.9rem;
          line-height: 1.1rem;
        }
        button {
          padding: 0.5rem;
          width: 100%;
        }
      }
    }
  }
`;
