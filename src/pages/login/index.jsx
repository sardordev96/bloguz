import { NavLink } from "react-router-dom";
import "./login.css";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../register/googleConfig"
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {

  const navigate = useNavigate()

  const [gmail, setGmail] = useState(``)

  const signInWithGoogle = async () => {
    signInWithPopup(auth,provider).then((login) => {
      fetch(import.meta.env.VITE_APP_BASE_URL + "/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: login?.user?.email
        })
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.token){
          localStorage.setItem("token", data.token)
        }
        if(data.veriFyAdmin !== null){
          localStorage.setItem("admin", data.veriFyAdmin)
        }
        if(localStorage.getItem("admin")){
          navigate("/admin-page-scret-control/admin-home")
        }
        if(data.veriFyAdmin === null && localStorage.getItem("token")){
          navigate("/");
        }
      });
    })
  }
 

  const signIn = async () => {
   
      fetch(import.meta.env.VITE_APP_BASE_URL + "/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: gmail
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.token){
          localStorage.setItem("token", data.token)
        }
        if(data.veriFyAdmin !== null){
          localStorage.setItem("admin", data.veriFyAdmin)
        }
        if(localStorage.getItem("admin")){
          navigate("/admin-page-scret-control/admin-home")
        }
        if(data.veriFyAdmin === null && localStorage.getItem("token")){
          navigate("/");
        }
      });
  };
 

  return (
    <div className="container">
      <div className="register-inner">
        <h2 className="register-title">Tizimga kirish</h2>
        <p className="register-title-p">
          Ro'yxatdan o'tish paytida taqdim etilgan elektron pochta va parol
          yordamida hisobingizga kiring.
        </p>
        <div className="register">
          <fieldset className="fieldset">
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              type="email"
              className="register-input"
              id="email"
              placeholder="Email..."
              name="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="password" className="register-label">
              Password
            </label>
            <input
              type="password"
              className="register-input"
              id="password"
              placeholder="Parol..."
            />
          </fieldset>
          <p className="register-text">
            Ro'yxatdan o'tmaganmisiz?{" "}
            <NavLink className="register-link" to={"/register"}>
              Sign up
            </NavLink>
          </p>
          <div className="register-btn-box">
            <button onClick={signIn} className="register-btn" >Ro'yxatdan o'tish</button>
            <button onClick={signInWithGoogle}  className="google-button">
              <FaGooglePlusG className="google-icon" /> Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
