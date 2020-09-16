import React, { useState, useEffect } from 'react';
import './style.scss';
//Importing Services
import axios from 'axios';

function Index(props) {
	const [meme, setMeme] = useState();
	const [interval, setInterval] = useState(10000);
	const [fade, setFade] = useState(5);
	const [counter, setCounter] = useState(0.15);

	useEffect(() => {
		document.getElementById('Meme').style.opacity = 0;
		getMeme();
	}, []);

	const getMeme = async () => {
		const result = await axios.get('https://meme-api.herokuapp.com/gimme');
		setMeme(result.data.url);
		setTimeout(() => {
			getMeme();
			//fadein();
		}, interval);
	};

	const fadein = async () => {
		const transparency = document.getElementById('Meme').style;

		if (counter < 1) {
			document.getElementById('Meme').style.opacity = counter;
			add();
			/* for (let i = 1; i < 500; i++) {
				console.log('happens');
				document.getElementById('Meme').style.opacity =
					document.getElementById('Meme').style.opacity + 0.5;
				console.log('ended', document.getElementById('Meme').style.opacity);
			} */
		}
	};
	const add = async () => {
		await setCounter(counter + 0.1);
		fadein();
	};

	return (
		<>
			<button
				onClick={() => {
					fadein();
				}}
			>
				fade
			</button>
			<button
				onClick={() => {
					console.log(document.getElementById('Meme').style.opacity);
				}}
			>
				opacity
			</button>
			<div id="Meme">
				<img src={meme} alt="" />
			</div>
		</>
	);
}

export default Index;
