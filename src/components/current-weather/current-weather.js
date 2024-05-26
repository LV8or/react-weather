import "./current-weather.css";

export default function CurrentWeather({data}) {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-desc">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}&deg;F</p>
                <div className="details">
                    <div className="param-row">
                        <span className="param-label">Details</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Feels like</span>
                        <span className="param-value">{Math.round(data.main.feels_like)}</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">{Math.round(data.wind.speed)}</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Pressure</span>
                        <span className="param-value">{Math.round(data.main.pressure)}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}