import React from 'react';
import './App.css';

function App() {
	return (
		<div className="overall">
			<div className="row">
				<div className="box">Calendar</div>
				{/* date */}
				<div className="box">Clocks</div>
				<div className="box">weather</div>
			</div>
			<div className="row">Notifications</div>
			<div className="row">
				<div className="box">Stocks</div>
				<div className="box">last emails</div>
				<div className="box">News</div>
			</div>
		</div>
	);
}

export default App;
