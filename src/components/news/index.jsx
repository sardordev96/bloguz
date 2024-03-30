import "./news.css";
import Cardimg from "../../assets/img/property-03.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

export const News = () => {

  return (
    <section className="news">
      <div className="container">
        <div className="news-inner">
          <div className="news-box">
            <h2 className="news-box-home-title">Yangiliklar</h2>
            <input
              type="text"
              className="news-box-input"
              placeholder="qidirish..."
            />
          </div>
          <ul className="news-list">
           
                <li className="news-item">
                  <img src={Cardimg} alt="img" className="news-img" />
                  <div className="card-box">
                    <h4 className="card-title">...</h4>
                    <p className="card-text">...</p>
                    <div className="card-bottom">
                      <p className="card-time"></p>
                      <NavLink to={`/single/id`}>
                        <button className="card-btn">
                          ko'proq
                          <FaArrowCircleRight className="card-arrow" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </li>
          </ul>
          <ul className="card-bottom-list">
            <li className="card-bottom-item">
              <button
                className={"card-page"}
              >
                <GiPreviousButton />
              </button>
            </li>
            {/* <li className="card-bottom-item">
              <button className="card-page">1</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">2</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">3</button>
            </li> */}
            <li className="card-bottom-item">
              <button
                className={"card-page"}
              >
                <GiNextButton />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
