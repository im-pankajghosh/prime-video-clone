import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Modal from "./Modal";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";

export default function Navbar() {
  const [browseMenu, setBrowseMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  return (
    <Container>
      <nav className="flex a-center j-between">
        <div className="nav-left flex a-center">
          <a href="/" className="logo">
            <img src={logo} alt="prime video" />
          </a>
        </div>
        <div className="nav-right flex a-center">
          <button
            className="browse-btn flex a-center"
            onClick={() => setBrowseMenu(true)}
          >
            Browse
            <RiArrowDropDownFill />
          </button>
          {browseMenu && (
            <Modal onClose={() => setBrowseMenu(false)}>
              <ul className="browse-menu">
                <li>
                  <a className="menu-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Store
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Channels
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Categories
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    My Stuff
                  </a>
                </li>
              </ul>
            </Modal>
          )}

          <label htmlFor="" className="search flex a-center">
            <TbSearch />
          </label>
          <button
            className="user-btn flex a-center"
            onClick={() => setUserMenu(true)}
          >
            <AiOutlineUser />
            <RiArrowDropDownFill />
          </button>
          {userMenu && (
            <Modal onClose={() => setUserMenu(false)}>
              <ul className="user-menu">
                <li>
                  <button onClick={()=>(setUserMenu(false))}><AiOutlineClose/></button>
                </li>
                <li>
                  <a className="menu-item" href="/signin">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Watch Anywhere
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </Modal>
          )}
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: var(--nav-bg-color);
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    z-index: 100;
    .nav-left {
      height: 100%;
      .logo {
        img {
          height: 35px;
        }
      }
    }

    .nav-right {
      height: 100%;
      .browse-btn {
        font-size: 1rem;
        background-color: transparent;
        color: var(--font-color);
        border: none;
        padding: 1rem;
      }
      .browse-menu {
        position: absolute;
        top: 70px;
        right: 0;
        left: 0;
        list-style: none;
        background-color: var(--dropdown-menu-bg-color);
        li {
          .menu-item {
            color: var(--font-color);
            display: block;
            width: 100%;
            padding: 1rem;
            border-bottom: 1px solid var(--dropdown-menu-item-hover-bg-color);
            transition: all 0.2s;
            &:hover {
              background-color: var(--dropdown-menu-item-hover-bg-color);
            }
          }
        }
      }

      .search {
        font-size: 1.5rem;
        margin: 1rem;
        cursor: pointer;
      }
      .user-btn {
        font-size: 1.5rem;
        background-color: transparent;
        color: var(--font-color);
        border: none;
        cursor: pointer;
      }
      .user-menu {
        position: absolute;
        top: 60px;
        right: 20px;
        list-style: none;
        background-color: var(--dropdown-menu-bg-color);
        box-shadow: 0 0 15px #00000092;
        border-radius: 0.2rem;
        transition: 0.2s;
        li {
          button{
            background-color: transparent;
            color: #fff;
            padding: 1rem;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            display: none;
          }
          .menu-item {
            color: var(--font-color);
            display: block;
            width: 180px;
            padding: 1rem;
            border-bottom: 1px solid var(--dropdown-menu-item-hover-bg-color);
            transition: all 0.2s;
            &:hover {
              background-color: var(--dropdown-menu-item-hover-bg-color);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    nav {
      height: 50px;
      .logo {
        img {
          height: 30px !important;
        }
      }
      .browse-menu{
        top: 50px !important;
      }
      .user-menu {
        top: 0 !important;
        right: 0 !important;
        left: 0;
        min-height: 100vh;
        height: 100%;
        padding-top: 50px;
        li {
          button{
            display: initial !important;
            position: absolute;
            right: 0;
            top: 0;
          }
          .menu-item {
            min-width: 100vw !important;
            width: 100% !important;
            &:hover {
              background-color: var(--dropdown-menu-item-hover-bg-color);
            }
          }
        }
      }
    }
  }
`;
