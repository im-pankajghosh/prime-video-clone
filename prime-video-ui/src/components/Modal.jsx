import React, { useState } from "react";
import styled from "styled-components";

export default function Modal(props) {
  return (
    <Container>
      <div
        className="modal flex a-center j-center"
        onClick={() => {
          if (props.onClose) props.onClose();
        }}
      >
        <div
          className="modal-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.children}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #00000064;
    .modal-container {
      width: fit-content;
      height: fit-content;
    }
  }
`;
