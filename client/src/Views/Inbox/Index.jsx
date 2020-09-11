import React, { useEffect, useState } from 'react';
//Import Services

function Index(props) {
	const [messages, setMessages] = useState();

	useEffect(() => {
		console.log('one time');
		updateMessages();
		// trial();
	}, []);

	var options = { query: 'from:facebook.com newer_than:2d' };

	/* const trial = async () => {
		let a = await gmailApiSync.authorizeWithToken(accessToken, function (
			err,
			oauth
		) {
			if (err) {
				console.log('Something went wrong: ' + err);
				return;
			} else {
				gmailApiSync.queryMessages(oauth, options, function (err, response) {
					if (err) {
						console.log('Something went wrong: ' + err);
						return;
					}
					console.log(JSON.stringify(response));
				});
			}
		});
	}; */

	const updateMessages = async () => {
		//const result = await gmailApi.updateSigninStatus(true);
		//const results = await gmailApi.getProfile();
		//console.log('this is the result', results);
		console.log('this is the result');
	};

	/* const getMessages = () => {
		gmailApi.getMessages(true, 5).then((res) => {
			setMessages({ messages: gmailApi.normalizeData(res) });
		});
	}; */

	return <div>This will be the emails</div>;
}

export default Index;
