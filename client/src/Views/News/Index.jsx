import React, { useState, useEffect, useRef } from 'react';

//Import Services
import moment from 'moment';
const axios = require('axios');
const $ = require('jquery');

function Index(props) {
	const [news, setNews] = useState();
	const [counter, setCounter] = useState(0);
	const [interval, setInterval] = useState(10000);
	const refContainer = useRef(0);

	useEffect(() => {
		$('#News').fadeOut({ duration: 50 });
		setTimeout(() => {
			$('#News').fadeOut({ duration: 3000 });
		}, interval - 3000);
		getNews();
		animation();
		setInterval((counter) => {
			console.log('he');
		}, 500);
	}, []);

	const getNews = async () => {
		const getNews = await axios.get(
			`http://newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.REACT_APP_NEWS_API}`
		);
		await setNews(getNews.data.articles);
	};

	const animation = () => {
		$('#News').fadeIn({ duration: 3000 });
		setTimeout(() => {
			animation();
			setTimeout(() => {
				$('#News').fadeOut({ duration: 3000 });
			}, interval - 3000);
		}, interval);
	};

	return (
		<>
			<button
				onClick={() => {
					console.log(counter);
				}}
			>
				Miss Débora Bianca Chorincas Mourato
			</button>
			<div id="News">
				<h1>{news && news[counter].author}</h1>
				<p>{news && news[counter].content}</p>
			</div>
		</>
	);
}

export default Index;
