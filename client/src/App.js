import React, { useEffect, useState } from 'react';
import './App.scss';

//Importing Views
import Inbox from './Views/Inbox/Index.jsx';
import TodayDateAndHour from './Views/TodayDateAndHour/Index.jsx';
import Weather from './Views/Weather/Index.jsx';
import News from './Views/News/Index.jsx';
import Stocks from './Views/Stocks/Index.jsx';
import GoogleCalendar from './Views/GoogleCalendar/Index.jsx';
import MemeGenerator from './Views/MemeGenerator/Index.jsx';
//IMporting Services
import Axios from 'axios';

function App() {
	useEffect(() => {}, []);

	return (
		<div className="overall">
			{/* <button
				onClick={() => {
					trial();
				}}
			>
				Test
			</button> */}
			<div className="row">
				<div className="box">
					<MemeGenerator />
					{/* <TodayDateAndHour /> */}
				</div>
				{/* calendar */}
				<div className="box" id="clock">
					<GoogleCalendar />
				</div>
				<div className="box">
					<Weather />
				</div>
			</div>
			<div className="row">Notification, Meme Generator</div>
			<div className="row">
				<div className="box">
					<Stocks />
				</div>
				<div className="box background">
					<Inbox />
				</div>
				<div className="box ">
					<News />
				</div>
			</div>
		</div>
	);
}

export default App;
