import './WeatherForecast.css';
import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

//part1
// const WeatherForecast=({day, img, imgAlt, conditions, time})=>{
//     return (
//         <div className="weather">
//             <h2>{day}</h2>
//             <img src={img} alt={imgAlt}/>
//             <p><span>conditions: </span>{conditions}</p>
//             <p><span>time: </span>{time}</p>
//         </div>
//     );
// };

//with subcomponents
const WeatherForecast=({forecast})=>{
    return (
        <div className="weather">
            <WeatherData day={forecast.day} conditions={forecast.conditions} time={forecast.time} />
            <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt}/>
        </div>
    );
};

export default WeatherForecast;

