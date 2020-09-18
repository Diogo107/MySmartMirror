import Axios from 'axios';
import React, { useState, useEffect } from 'react';
//Import Services
var yahooStockPrices = require('yahoo-stock-prices');
var googleStocks = require('google-stocks');

function Index(props) {
	const [stock, setStock] = useState();

	useEffect(() => {
		/* yahooStockPrices.getCurrentPrice('BCP.LS', function (err, price) {
			console.log(price);
		}); */
		getStocks();
	}, []);

	const getStocks = async () => {
		const result = await Axios.get('/api/stocks');
		await setStock({
			variation: result.data.value,
			price: result.data.price,
		});
		const color = document.getElementById('variation').style;
		if (result.data.value > 0) {
			color.color = 'green';
		} else if (result.data.value < 0) {
			color.color = 'red';
		}
		setTimeout(() => {
			getStocks();
		}, 60000);
	};

	var CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	var DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	const gapi = window.gapi;

	const google = () => {
		console.log('button', CLIENT_ID, API_KEY);
		gapi.load('auth2', async (e) => {
			console.log(e);
		});
	};

	return (
		<div>
			<h1>BCP</h1>
			{stock && (
				<>
					<h4 id="variation">{stock.variation} %</h4>
					<h5>{stock.price} €</h5>
				</>
			)}
		</div>
	);
}

export default Index;
