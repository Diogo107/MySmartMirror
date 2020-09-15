import React from 'react';
import axios from 'axios';

function Index(props) {
	const gapi = window.gapi;
	console.log('gapi', gapi);
	var CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	var DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	const calendar = () => {
		gapi.load('client:auth2', () => {
			console.log('loaded client');

			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES,
			});
			gapi.client.load('calendar', 'v3', () => console.log('bam!'));

			gapi.auth2
				.getAuthInstance()
				.signIn()
				.then(() => {
					const result = axios.get(
						'https://www.googleapis.com/calendar/v3/calendars/diogo.filipe.santos107@gmail.com/events'
					);
					console.log(result);
				});
		});
	};

	return (
		<div>
			<button
				onClick={() => {
					calendar();
				}}
			>
				Test
			</button>
			This will be the calendar sdfsdfsdfsf
		</div>
	);
}

export default Index;
