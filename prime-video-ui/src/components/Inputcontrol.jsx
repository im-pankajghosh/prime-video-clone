import React from "react";
import styled from "styled-components";

export default function Inputcontrol(props) {
  return (
    <Container>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    color: #000;
    font-weight: 500;
  }
  input {
    border-radius: 0.2rem;
    border: 1px solid #000;
    outline: none;
    padding: 0.2rem;
    color: #000;
  }
`;
