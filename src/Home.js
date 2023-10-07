import React, { useEffect, useState } from "react";
import hotimage from "./images/hotimage.jpg";
import coldimage from "./images/coldimage.jpg";
import Details from "./components/Details";
import { getWeatherData } from "./weatherService";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [bg, setBg] = useState(hotimage);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const wheaterData = async () => {
      try {
        const data = await getWeatherData(city, unit);
        setWeather(data);

        const threshold = unit === "metric" ? 20 : 60;

        if (data.temp <= threshold) {
          setBg(coldimage);
        } else {
          setBg(hotimage);
        }
        setError(null);
      } catch (error) {
        toast.error("City not Found.");
        setError("City not Found.");
      }
    };
    wheaterData();
  }, [unit, city]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "°C to °F";
    button.innerText = isCelsius ? "°C to °F" : "°F to °C";
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const handleKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const handleSearch = () => {
    setCity(search);
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="climate-input">
              <div className="city-input">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyPressed}
                  type="text"
                  name="city"
                  placeholder="Enter City Name"
                />
                <button onClick={handleSearch} className="btn-search">
                  Search
                </button>
              </div>
              <div className="unit">
                <button onClick={(e) => handleClick(e)} className="btn-unit">
                  {unit === "metric" ? "°C to °F" : "°F to °C"}
                </button>
              </div>
            </div>

            <div className="climate-details">
              <div className="city">
                <h1>{`${weather.name}, ${weather.country}`}</h1>
              </div>

              <div className="icon">
                <img className="icon-img" src={weather.iconUrl} alt="icon" />

                <h3 className="temp-description">{weather.description}</h3>
              </div>

              <div className="temprature">
                <h4>{`${weather.temp.toFixed()} °${
                  unit === "metric" ? "C" : "F"
                } `}</h4>
              </div>
            </div>
            <div className="details">
              <Details weather={weather} unit={unit} />
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Home;
