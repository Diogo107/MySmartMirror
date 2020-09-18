import React, { useState, useEffect } from 'react';
import './style.scss';
//Importing Services
import axios from 'axios';
const $ = require('jquery');

function Index(props) {
	const [meme, setMeme] = useState();
	const [interval, setInterval] = useState(10000);

	useEffect(() => {
		$('#Meme').fadeOut({ duration: 50 });
		setTimeout(() => {
			$('#Meme').fadeOut({ duration: 3000 });
		}, interval - 3000);
		getMeme();
	}, []);

	const getMeme = async () => {
		const result = await axios.get('https://meme-api.herokuapp.com/gimme');
		setMeme(result.data.url);
		$('#Meme').fadeIn({ duration: 3000 });
		setTimeout(() => {
			getMeme();
			setTimeout(() => {
				$('#Meme').fadeOut({ duration: 3000 });
			}, interval - 3000);
		}, interval);
	};

	return (
		<div id="Meme">
			<img src={meme} alt="" />
		</div>
	);
}

export default Index;
