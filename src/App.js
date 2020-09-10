import React, { useEffect, useState } from 'react';
import './App.scss';

//Importing Views
import Inbox from './Views/Inbox/Index.jsx';
import TodayDateAndHour from './Views/TodayDateAndHour/Index.jsx';
import Weather from './Views/Weather/Index.jsx';
import News from './Views/News/Index.jsx';

function App() {
	useEffect(() => {}, []);

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
				<div className="box ">
					<News />
				</div>
			</div>
		</div>
	);
}

export default App;
