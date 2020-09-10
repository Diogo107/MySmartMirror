import React, { useState, useEffect } from 'react';
//Import Services
import moment from 'moment';

function Index(props) {
	const [hour, setHour] = useState();
	const [minutes, setMinutes] = useState();
	const [day, setDay] = useState();
	const [month, setMonth] = useState();
	const [year, setYear] = useState();
	const [weekday, setWeekday] = useState();

	useEffect(() => {
		time();
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

	return (
		<div>
			<h2>{weekday}</h2>
			{/* <img
						src="https://image.flaticon.com/icons/svg/747/747824.svg"
						alt=""
						style={{ width: '50px' }}
					/> */}
			<h4>{day + ' ' + month + ',   ' + year} </h4>
			<h1>{hour + ' : ' + minutes}</h1>
		</div>
	);
}

export default Index;
