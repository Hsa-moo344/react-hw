import React from "react";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row" stylename="display: none;">
        <div className="col-3">
          <div className="weather-forecast-date">Saturday</div>
          <img src="images/sunny.png" alt="" width="30" />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 20 °</span>
            <span className="weather-forecast-temperature-min"> 10 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
