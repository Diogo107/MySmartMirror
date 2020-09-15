import React from 'react';
import axios from 'axios';

function Index(props) {
	const gapi = window.gapi;
	console.log('gapi', gapi);
	var CLIENT_ID =
		'268387324012-pmjfmh0n299nvbmsa22bpche5gp2j6gk.apps.googleusercontent.com';
	var API_KEY = 'AIzaSyCUE47bd8FSk3ToHPe-aeBHlno_BOaEk5Y';
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
				.then(async (e) => {
					const hello = await gapi.client.calendar.events.list({
						calendarId: 'diogo.filipe.santos107@gmail.com',
						timeMin: new Date().toISOString(),
						showDeleted: false,
						singleEvents: true,
						maxResults: 10,
						orderBy: 'startTime',
					});
					console.log(hello);
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
