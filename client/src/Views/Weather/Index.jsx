import React, { useState, useEffect } from 'react';

//Import Services
import moment from 'moment';

//Open Weather
var weather = require('openweather-apis');
weather.setLang('pt');
weather.setCityId(2267112);
weather.setUnits('metric');
weather.setAPPID(process.env.REACT_APP_OPEN_WEATHER);

function Index(props) {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	useEffect(() => {
		getWeather();
	}, []);

	const getWeather = async () => {
		await weather.getAllWeather(function (err, temp) {
			setCurrentWeather(temp);
		});

		/* const result = await weather.getWeatherForecastForDays(3, function (
			err,
			obj
		) {
			console.log(obj);
		});
		console.log(result); */
	};

	return (
		<>
			<div className="overall_weather">
				<div className="forty_percent">
					<img
						src="https://image.flaticon.com/icons/svg/2938/2938068.svg"
						alt=""
					/>
				</div>
				<div className="forty_percent">
					{currentWeather && <h1>{currentWeather.main.temp}º</h1>}
				</div>
			</div>
			<div className="overall_weather">
				<div className="forty_percent">
					<div className="forty_percent">
						<img
							src="https://image.flaticon.com/icons/svg/2938/2938006.svg"
							alt=""
						/>
					</div>
					<div className="forty_percent">
						{currentWeather && <h3>{currentWeather.wind.speed} km/h</h3>}
					</div>
				</div>
				<div className="forty_percent">
					<div className="forty_percent">
						<img
							src="https://image.flaticon.com/icons/svg/2316/2316581.svg"
							alt=""
						/>
					</div>
					<div className="forty_percent">
						{currentWeather && <h3>{currentWeather.main.feels_like}º</h3>}
					</div>
				</div>
			</div>
			<div className="overall_weather">
				<div className="forty_percent">
					<div className="forty_percent">
						<img
							src="https://image.flaticon.com/icons/svg/2294/2294975.svg"
							alt=""
						/>
					</div>
					<div className="forty_percent">
						{currentWeather && (
							<h3>
								{moment.unix(currentWeather.sys.sunrise).format('HH : mm')}
							</h3>
						)}
					</div>
				</div>
				<div className="forty_percent">
					<div className="forty_percent">
						<img
							src="https://image.flaticon.com/icons/svg/2294/2294979.svg"
							alt=""
						/>
					</div>
					<div className="forty_percent">
						{currentWeather && (
							<h3>
								{moment.unix(currentWeather.sys.sunset).format('HH : mm')}
							</h3>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Index;
