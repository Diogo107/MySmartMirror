import React, { useEffect, useState } from 'react';
import './App.scss';
import moment from 'moment';
//Importing Views
import Inbox from './Views/Inbox/Index.jsx';
import TodayDateAndHour from './Views/TodayDateAndHour/Index.jsx';

//Importing Services
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
	const [news, setNews] = useState();
	const [newsDisplayed, setNewsDisplayed] = useState();
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		let a = moment.unix(1599631969);
		console.log('helloooooo', a.hour(), a.minutes());
		time();
		getWeather();
		getNews();
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
		await weather.getAllWeather(function (err, temp) {
			console.log(temp);
			setCurrentWeather(temp);
		});
	};
	const getNews = async () => {
		const getNews = await axios.get(
			`http://newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.REACT_APP_NEWS_API}`
		);
		await setNews(getNews.data.articles);
		setInterval(async () => {
			setCounter((previous) => {
				console.log(previous);
				if (previous == 19) {
					return 0;
				} else {
					return previous + 1;
				}
			});
		}, 1000);
	};
	const currentNews = (news) => {
		setInterval(() => {
			//let temp = news[counter].content;
			//console.log(temp);
			setCounter(1);
			console.log('got this');
		}, 3000);
	};
	return (
		<div className="overall">
			<div className="row">
				<div className="box">
					<TodayDateAndHour />
					<button
						onClick={async () => {
							console.log(news);
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
				<div className="box">
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
								{currentWeather && (
									<h3>{currentWeather.main.feels_like} km/h</h3>
								)}
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
				</div>
			</div>
			<div className="row">Notification</div>
			<div className="row">
				<div className="box background">Stocks</div>
				<div className="box background">
					<Inbox />
				</div>
				<div className="box background">
					{news && news.filter((e) => console.log())}
					<h1>{news && news[counter].author}</h1>
					<p>{news && news[counter].content}</p>
				</div>
			</div>
		</div>
	);
}

export default App;
