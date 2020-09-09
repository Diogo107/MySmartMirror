import React, { useEffect, useState } from 'react';
import './App.css';
import dotenv from 'dotenv';
import moment from 'moment';
const axios = require('axios');
//Open Weather
var weather = require('openweather-apis');
weather.setLang('pt');
weather.setCityId(2267112);
weather.setUnits('metric');
weather.setAPPID(process.env.REACT_APP_OPEN_WEATHER);

function App() {
	const [hour, setHour] = useState();
	const [minutes, setMinutes] = useState();
	const [day, setDay] = useState();
	const [month, setMonth] = useState();
	const [year, setYear] = useState();
	const [weekday, setWeekday] = useState();
	const [currentWeather, setCurrentWeather] = useState();

	useEffect(() => {
		time();
		getWeather();
		console.log('useEffect');
		console.log(moment().format('HH, mm'));
	}, []);
	const time = () => {
		//Current Date
		setInterval(() => {
			const currentWeekday = moment().format('dddd');
			const currentDay = moment().format('d');
			const currentMonth = moment().format('MMMM');
			const currentYear = moment().format('YYYY');
			if (
				currentWeekday !== weekday ||
				currentDay !== day ||
				currentMonth !== month ||
				currentYear !== year
			) {
				setDay(currentDay);
				setMonth(currentMonth);
				setYear(currentYear);
				setWeekday(currentWeekday);
			}
		}, 1000);
		//Hours and Minutes
		setInterval(() => {
			const currentHour = moment().format('HH');
			const currentMinutes = moment().format('mm');
			if (currentHour !== hour || currentMinutes !== minutes) {
				setHour(currentHour);
				setMinutes(currentMinutes);
			}
		}, 1000);
	};
	const getWeather = async () => {
		console.log(process.env.REACT_APP_OPEN_WEATHER);
		const todayWeather = await axios.get(
			`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${process.env.REACT_APP_OPEN_WEATHER}`
		);
		setCurrentWeather(todayWeather.data);
		console.log(todayWeather.data);
		setInterval(() => {
			console.log('weather');
		}, 1000000);
	};
	return (
		<div className="overall">
			<div className="row">
				<div className="box">
					<button
						onClick={async () => {
							console.log(weather);
							const a = await weather.getTemperature(function (err, temp) {
								console.log(temp);
							});
						}}
					>
						Tempo
					</button>
					<h2>{weekday}</h2>
					{/* <img
						src="https://image.flaticon.com/icons/svg/747/747824.svg"
						alt=""
						style={{ width: '50px' }}
					/> */}
					<h4>{day + ' ' + month + ',   ' + year} </h4>
					<h1>{hour + ' : ' + minutes}</h1>
				</div>
				{/* calendar */}
				<div className="box background" id="clock">
					<p>
						Hour: {hour}...Minutes: {minutes}
					</p>
				</div>
				<div className="box background">weather</div>
			</div>
			<div className="row">Notification</div>
			<div className="row">
				<div className="box background">Stocks</div>
				<div className="box background">last emails</div>
				<div className="box background">News</div>
			</div>
		</div>
	);
}

export default App;
