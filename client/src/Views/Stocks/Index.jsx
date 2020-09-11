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
		googleStocks(['AAPL'], function (error, data) {
			console.log(data);
			console.log(error);
		});
	}, []);

	return <div>This asdasdasd</div>;
}

export default Index;
