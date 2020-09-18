import React, { useState, useEffect } from 'react';

//Import Services
import moment from 'moment';
const axios = require('axios');
const $ = require('jquery');

function Index(props) {
	const [news, setNews] = useState();
	const [counter, setCounter] = useState(0);
	const [interval, setInterval] = useState(10000);

	useEffect(() => {
		$('#News').fadeOut({ duration: 50 });
		setTimeout(() => {
			$('#News').fadeOut({ duration: 3000 });
		}, interval - 3000);
		getNews();
		animation();
		display();
	}, []);

	const getNews = async () => {
		const getNews = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.REACT_APP_NEWS_API}`
		);
		console.log(getNews);
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

	const display = () => {
		setTimeout(() => {
			setCounter((previous) => {
				if (previous < 19) {
					return previous + 1;
				} else {
					return 0;
				}
			});
			display();
		}, interval);
	};

	return (
		<div id="News">
			<h1>{news && news[counter].author}</h1>
			<small>
				{news &&
					news[counter].publishedAt &&
					moment(news[counter].publishedAt)
						.locale('pt')
						.format('D / M / YYYY, h:mm')}
			</small>
			<p>{news && news[counter].content}</p>
		</div>
	);
}

export default Index;
