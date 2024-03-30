import "./headertop.css";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export const HeaderTop = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
   setModal(item => !item)
  }

  return (
    <div className="header-top">
      <div className="container">
            {
              modal ?
              <FaRegWindowClose className="hamburger" onClick={handleModal}/>
              : 
              <IoShareSocial className="hamburger hamburger-next" onClick={handleModal}/>
            }
        <div className={modal ? "header-top-inner" : "header-top-inner-extra"}>
        <FaRegWindowClose className="hamburger" onClick={handleModal}/>
          <div className="header-top-left">
            <a
              className="header-top-link"
              target="_blank"
              href="https://muhammadalishuhratjonov50@gmail.com"
            >
              <MdEmail className="header-top-icon"/>
              <span>
              mshuhratjonov@gmail.com
              </span>
            </a>
            <a
              className="header-top-link header-top-link-extra"
              target="_blank"
              href="https://maps.app.goo.gl/4aXR1PSWbjtwioj47"
            >
              <FaMap className="header-top-icon" />
              <span>
              Samarqand. sh
              </span>
            </a>
          </div>
          <div className="header-top-right">
            <div className="header-top-auth">
              <FaRegUserCircle style={{ fontSize: "20px" }} />
              <NavLink to={"/login"} className="header-top-lgoin">
                Log in
              </NavLink>
              <NavLink to={"/register"} className="header-top-lgoin">
                Register
              </NavLink>
            </div>
            <ul className="header-top-list">
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100076524691842&mibextid=ZbWKwL"
                  className="header-top-item-link"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/muhammadali122222/?igshid=ZDc4ODBmNjlmNQ%3D%3D"
                  className="header-top-item-link"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="https://t.me/Sh_Muhammadali5"
                  className="header-top-item-link"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="header-top-item">
                <a
                  target="_blank"
                  href="linkedin.com/in/muhammadali-shuhratjonov-6362b42a8"
                  className="header-top-item-link"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
