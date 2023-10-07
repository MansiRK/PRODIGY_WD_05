import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiHappyAlt, BiLogoTailwindCss } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Details = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const details = [
    {
      id: 1,
      icon: <AiOutlineArrowDown />,
      title: "Min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <AiOutlineArrowUp />,
      title: "Max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },

    {
      id: 3,
      icon: <BiHappyAlt />,
      title: "Feels Like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <BiLogoTailwindCss />,
      title: "Wind Speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];
  return (
    <div className="details-container">
      {details.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="detail-card ">
          <div className="detail">
            <div className="detail-icon">{icon}</div>
            <h5>{title}</h5>
            <h4>{`${data} ${unit}`}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
