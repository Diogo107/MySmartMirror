import React, { useState, useEffect } from 'react';

//Import Services
import moment from 'moment';
const axios = require('axios');

function Index(props) {
	const [news, setNews] = useState();
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		getNews();
	}, []);

	const getNews = async () => {
		const getNews = await axios.get(
			`http://newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.REACT_APP_NEWS_API}`
		);
		await setNews(getNews.data.articles);
		setInterval(async () => {
			setCounter((previous) => {
				if (previous == 19) {
					return 0;
				} else {
					return previous + 1;
				}
			});
		}, 1000);
	};

	return (
		<>
			<h1>{news && news[counter].author}</h1>
			<p>{news && news[counter].content}</p>
		</>
	);
}

export default Index;
