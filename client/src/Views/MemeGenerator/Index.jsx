import React, { useState, useEffect } from 'react';
import './style.scss';
//Importing Services
import axios from 'axios';

function Index(props) {
	const [meme, setMeme] = useState();
	const [interval, setInterval] = useState(10000);
	const [fade, setFade] = useState(5);

	useEffect(() => {
		document.getElementById('Meme').style.opcity = 1;
		getMeme();
	}, []);

	const getMeme = async () => {
		const result = await axios.get('https://meme-api.herokuapp.com/gimme');
		setMeme(result.data.url);
		setTimeout(() => {
			getMeme();
			fadein();
		}, interval);
	};

	const fadein = () => {
		const transparency = document.getElementById('Meme').style;
		if (transparency.opacity == '') {
			transparency.opacity = 1;
			console.log('there was nothing');
		}
		console.log(transparency.opacity);
	};

	return (
		<div id="Meme">
			<img src={meme} alt="" />
		</div>
	);
}

export default Index;
