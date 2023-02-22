import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../App.css";
import logo from "../assets/logo.png";
import Buttoncontrol from "../components/Buttoncontrol";
import Inputcontrol from "../components/Inputcontrol";
import { firebaseAuth } from "../utils/firebase-config";

export default function Signup(props) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    user: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const submitHandler = async () => {
    if (!formValues.user || !formValues.email || !formValues.password) {
      setErrorMsg("Enter all fields");
      return;
    } else {
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(
        firebaseAuth,
        formValues.email,
        formValues.password
      )
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, { displayName: formValues.user });
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
          <h1 className="form-heading">Create account</h1>
          <Inputcontrol
            label="Your name"
            type="text"
            name="user"
            placeholder="First and last name"
            value={formValues.user}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
          {/* <small className="error">Enter your name</small> */}
          <Inputcontrol
            label="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
          {/* <small className="error">Enter your email</small> */}
          <Inputcontrol
            label="Password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
          />
          <small className="error">{errorMsg}</small>
          <Buttoncontrol
            label="Create your Amazon account"
            className="btn-primary"
            onClick={submitHandler}
            disabled={submitButtonDisabled}
          />
          <p className="form-rule">
            By continuing, you agree to the Amazon &nbsp;
            <span className="link">Conditions of Use and Privacy Notice</span>.
          </p>
          <hr />
          <p className="form-rule">
            Already have an account? &nbsp;
            <Link className="link" to="/login">
              Sign in ▸
            </Link>
          </p>
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
    max-width: 300px;
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
        border: 1px solid var(--btn-primary-bg-color);
        box-shadow: 0 0 8px var(--btn-primary-bg-color);
      }
    }
    .btn-primary {
      background-color: var(--btn-primary-bg-color);
      background-image: linear-gradient(to top, #ffc400, #ffffffab);
      border-color: var(--form-border-color);
      margin-top: 0.4rem;
      font-size: 0.8rem;
    }

    .btn-primary:disabled {
      opacity: 70%;
      border: 1px solid var(--btn-primary-bg-color);
      box-shadow: 0 0 8px var(--btn-primary-bg-color);
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
    }
    .error {
      width: fit-content;
      color: red;
    }
  }
`;
