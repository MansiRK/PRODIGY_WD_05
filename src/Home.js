import React from "react";
import HotImage from "./images/hotday.jpg";
import ColdImage from "./images/coldday.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="container">
          <div className="climate-input">
            <div className="city-input">
              <input type="search" name="city" placeholder="Enter City Name" />
              <button className="btn-search">Search</button>
            </div>
            <div className="unit">
              <button className="btn-unit">°C to °F</button>
            </div>
          </div>

          <div className="climate-details">
            <div className="city">
              <h1>Mumbai, India</h1>
            </div>
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10484/10484062.png"
                alt=""
              />

              <h3 className="icon-name">Hot</h3>
            </div>
            <div className="temprature">
              <h4>34 °C</h4>
            </div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptates enim quasi quam, delectus earum! Mollitia totam veniam
              ea minima excepturi placeat eaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
