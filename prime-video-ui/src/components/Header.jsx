import React from "react";
import styled from "styled-components";

export default function Header(props) {
  return (
    <Container>
      <header className="flex a-center">
        <div className="content flex column">{props.children}</div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  header {
    position: relative;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    padding: 3rem;
    .content {
      position: absolute;
      top: 20%;
      width: 50%;
      gap: 1.5rem;
      transition: all 0.5s;
      h1 {
        font-size: 2.9rem;
        line-height: 3rem;
        font-weight: 300;
      }
      p {
        font-size: 1.6rem;
        line-height: 1.8rem;
        font-weight: 300;
      }
      button {
        width: 300px;
        padding: 0.8rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        background-color: var(--btn-primary-bg-color);
        color: var(--btn-primary-font-color);
        transition: 0.1s;
        &:hover {
          background-color: var(--btn-primary-hover-bg-color);
        }
      }
    }
  }
`;