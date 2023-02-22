import React from "react";
import styled from "styled-components";
import "../App.css";

export default function Buttoncontrol(props) {
  return <Container>{props.label && <button {...props}>{props.label}</button>}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  button {
    padding: 0.4rem 3rem;
    background-color: #ebebeb;
    border: 1px solid #000;
    border-radius: 0.2rem;
    color: #000;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.5s;
  }
`;
