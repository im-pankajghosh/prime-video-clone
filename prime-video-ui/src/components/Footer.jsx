import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <footer className="flex a-center j-center">
        <div className="content flex column a-center j-between">
          <div className="logo flex a-center j-center">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
              alt="prime video"
            />
          </div>
          <div className="link flex a-center j-center">
            <a href="#">Terms and Privacy Notice</a>
            <a href="#">Send us feedback</a>
            <a href="#">Help</a>
          </div>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </Container>
  );
}
const Container = styled.div`
  footer {
    min-height: 20vh;
    .content {
      .link {
        gap: 1rem;
        a {
          color: var(--btn-primary-bg-color);
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
      p {
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--footer-copyright-font-color);
      }
    }
  }
`;
