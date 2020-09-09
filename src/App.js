import React, { useEffect, useState } from 'react';
import './App.css';
import ThemedAnalogClock from 'themed-analog-clock';
import moment from 'moment';

function App() {
	const [hour, setHour] = useState();
	const [minutes, setMinutes] = useState();
	useEffect(() => {
		time();
		console.log('useEffect');
		console.log(moment().format('HH, mm'));
	}, []);
	const time = () => {
		setInterval(() => {
			const currentHour = moment().format('HH');
			const currentMinutes = moment().format('mm');
			if (currentHour !== hour || currentMinutes !== minutes) {
				setHour(currentHour);
				setMinutes(currentMinutes);
			}
			console.log(hour, minutes);
		}, 1000);
	};
	return (
		<div className="overall">
			<div className="row">
				<div className="box">Calendar</div>
				{/* date */}
				<div className="box" id="clock">
					<p>
						Hour: {hour}...Minutes: {minutes}
					</p>
				</div>
				<div className="box">weather</div>
			</div>
			<div className="row">Notification(dasdas)</div>
			<div className="row">
				<div className="box">Stocks</div>
				<div className="box">last emails</div>
				<div className="box">News</div>
			</div>
		</div>
	);
}

export default App;
