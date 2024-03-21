import React from "react";
import "./MainHome.css";
import foodparamid from "../../asset/pyramid.png";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="main-home">
      <div className="left_main-home">
        <h3 className="animate__animated animate__fadeInUp">We have you</h3>
        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
          Know % Ingredients
        </h1>

        <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
          in Recipes
        </h1>
        <div className="desciption_main-home">
          <p className="animate__animated animate__fadeInUp animate__delay-2s">
            We develop the relationships that underpin the next phase in your
            organisation’s growth.
          </p>
          <ul className="animate__animated animate__fadeInUp animate__delay-3s">
            <li>
              <i className="las la-check" />
              Better Food Better Life
            </li>
            <li>
              <i className="las la-check" />
              Managing physical health{" "}
            </li>
          </ul>
          <Link to="/product-list">
            <button className="btn-quote animate__animated animate__fadeInUp animate__delay-3s">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
      <div className="right_main-home">
        <div className="main-home__img animate__animated animate__fadeInUp animate__delay-2s">
          <img src={foodparamid} alt="Food Healthy Paramid" />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
