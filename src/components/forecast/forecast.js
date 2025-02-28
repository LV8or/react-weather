import './forecast.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const Forecast = ({data}) => {
    const dayInWeek = new Date().getDay;
    const forecastDays = weekdays.slice(dayInWeek, weekdays.length).concat(weekdays.slice(0, dayInWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="desc">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}&deg;F / {Math.round(item.main.temp_max)}&deg;F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-frid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-frid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-frid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-details-frid-item">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-frid-item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-frid-item">
                                    <label>Feels like:</label>
                                    <label>{Math.round(item.main.feels_like)}&deg;F</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                
            </Accordion>
        </>
    )
    
}

export default Forecast