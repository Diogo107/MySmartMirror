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
		const result = await Axios.get('/stocks');
		console.log('this is result', result);
		await setStock({
			company: result.data.company,
			price: result.data.price,
		});
		console.log(stock);
	};

	return (
		<div>
			<button
				onClick={() => {
					console.log(stock);
				}}
			>
				Test
			</button>
		</div>
	);
}

export default Index;
