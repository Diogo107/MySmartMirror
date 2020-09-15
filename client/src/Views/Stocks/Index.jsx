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
			console.log('again');
		}, 60000);
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
