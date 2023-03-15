import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";
import "../App.css";
import logo from "../assets/logo.png";
import Buttoncontrol from "../components/Buttoncontrol";
import Inputcontrol from "../components/Inputcontrol";

export default function Login(props) {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const submitButtonHandler = () => {
    if (!formValues.email || !formValues.password) {
      setErrorMsg("Enter all field");
      return;
    } else {
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(
        firebaseAuth,
        formValues.email,
        formValues.password
      )
        .then((res) => {
          setSubmitButtonDisabled(false);
          localStorage.setItem("login",true);
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    }
  };
  return (
    <Container>
      <div className="flex column a-center">
        <div className="logo flex column">
          <img src={logo} alt="prime video" />
        </div>
        <div className="form flex column">
          <h1 className="form-heading">Sign in</h1>
          <Inputcontrol
            label="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          {/* <small className="error">{errorMsg}</small> */}
          <Inputcontrol
            label="Password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <small className="error">{errorMsg}</small>
          <Buttoncontrol
            label="Sign in"
            className="btn-primary"
            disabled = {submitButtonDisabled}
            onClick={submitButtonHandler}
          />
          <p className="form-rule">
            By continuing, you agree to the Amazon &nbsp;
            <span className="link">Conditions of Use and Privacy Notice</span>.
          </p>
          <hr />
          <small className="flex column a-center j-center btn-heading">
            New to Amazon?
          </small>
          <Buttoncontrol
            label="Create your Amazon account"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 100%;
  background-color: #fff;
  display: flex;
  color: #000;
  justify-content: center;
  .logo {
    padding: 1rem;
    img {
      height: 3rem;
    }
  }
  .form {
    border: 1px solid var(--form-border-color);
    border-radius: 0.3rem;
    max-width: 340px;
    width: fit-content;
    height: fit-content;
    padding: 1.5rem;
    gap: 8px;
    .form-heading {
      font-size: 1.6rem;
      font-weight: 400;
    }
    label {
      font-size: 12px;
    }
    input {
      color: var(--font-color-dark);
      border: 1px solid var(--form-border-color);
      padding: 0.4rem;
      font-size: 12px;
      &:focus {
        border: 1px solid var(--btn-secondary-bg-color);
        box-shadow: 0 0 8px var(--btn-secondary-bg-color);
      }
    }
    .btn-primary {
      background-color: var(--btn-secondary-bg-color);
      background-image: linear-gradient(to top, #ffc400, #ffffffab);
      border-color: var(--form-border-color);
      margin-top: 0.4rem;
      font-size: 0.8rem;
    }

    .btn-primary:disabled {
      opacity: 70%;
      border: 1px solid var(--btn-secondary-bg-color);
      box-shadow: 0 0 8px var(--btn-secondary-bg-color);
    }

    .form-rule {
      color: var(--font-color-dark);
      font-size: 0.73rem;
      padding: 0.5rem 0;
      .link {
        color: var(--link-font-color);
        text-decoration: none;
        cursor: pointer;
      }
    }

    hr {
      border-top: 1px solid var(--form-border-color);
      position: relative;
      top: 17px;
    }
    .btn-heading {
      font-size: 10px;
      background-color: #fff;
      z-index: 1;
      width: fit-content;
      margin: auto;
      padding: 0 0.5rem;
    }
    button {
      background-color: var(--btn-primary-bg-color);
      background-image: linear-gradient(to top, #e0dfdf, #f5f5f5);
      border-color: var(--form-border-color);
      margin-top: 0.4rem;
      font-size: 0.8rem;
    }
    .error {
      width: fit-content;
      color: red;
    }
  }
`;
