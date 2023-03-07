import React from "react";
import styled from "styled-components";

export default function Section(props) {
  return (
    <Container>
      <section>
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
    height: 40vh;
    padding: 1rem;
    .content{
      gap: 1rem;
    }
  }
`;
