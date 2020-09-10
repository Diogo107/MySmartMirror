import React, { useEffect, useState } from 'react';
import './App.scss';
import moment from 'moment';

//Importing Views
import Inbox from './Views/Inbox/Index.jsx';
import TodayDateAndHour from './Views/TodayDateAndHour/Index.jsx';
import Weather from './Views/Weather/Index.jsx';
import News from './Views/News/Index.jsx';

//Importing Services
const axios = require('axios');

//Open Weather
var weather = require('openweather-apis');
weather.setLang('pt');
weather.setCityId(2267112);
weather.setUnits('metric');
weather.setAPPID(process.env.REACT_APP_OPEN_WEATHER);

function App() {
	useEffect(() => {
		let a = moment.unix(1599631969);
		console.log('helloooooo', a.hour(), a.minutes());
		console.log('useEffect');
		console.log(moment().format('HH, mm'));
	}, []);

	return (
		<div className="overall">
			<div className="row">
				<div className="box">
					<TodayDateAndHour />
				</div>
				{/* calendar */}
				<div className="box background" id="clock">
					Calendar
				</div>
				<div className="box">
					<Weather />
				</div>
			</div>
			<div className="row">Notification</div>
			<div className="row">
				<div className="box background">Stocks</div>
				<div className="box background">
					<Inbox />
				</div>
				<div className="box background">
					<News />
				</div>
			</div>
		</div>
	);
}

export default App;
