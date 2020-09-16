import React, { useEffect, useState } from 'react';
//Importing Services
import { Table } from 'reactstrap';
import moment from 'moment';
import axios from 'axios';

function Index(props) {
	const [events, setEvents] = useState();
	const gapi = window.gapi;
	var CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
	var DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	useEffect(() => {
		calendar();
		setTimeout(() => {
			calendar();
		}, 10000);
	}, []);

	const calendar = () => {
		gapi.load('client:auth2', () => {
			console.log('loaded client');

			gapi.client
				.init({
					apiKey: API_KEY,
				})
				.then(async () => {
					const final = await gapi.client.request({
						path: `https://www.googleapis.com/calendar/v3/calendars/lneqgq8i8g8det46em5b7529u4@group.calendar.google.com/events`,
					});
					const result = final.result.items.filter((single) => {
						if (moment(single.start.dateTime).valueOf() > moment().valueOf()) {
							return single;
						}
					});
					/* const hello = await gapi.client.calendar.events.list({
						calendarId: 'diogo.filipe.santos107@gmail.com',
						timeMin: new Date().toISOString(),
						showDeleted: false,
						singleEvents: true,
						maxResults: 10,
						orderBy: 'startTime',
                    }); */
					setEvents(result);
				});
			gapi.client.load('calendar', 'v3', () => console.log('bam!'));
		});
	};

	return (
		<div>
			{/* 	<button
				onClick={() => {
					calendar();
				}}
			>
				Test
			</button> */}

			<Table>
				<thead>
					<tr>
						<th>Evento</th>
						<th>Faltam</th>
					</tr>
				</thead>
				<tbody>
					{events &&
						events.map((single) => (
							<tr>
								<td>{single.summary}</td>
								<td>{single.start.dateTime}</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
}

export default Index;
