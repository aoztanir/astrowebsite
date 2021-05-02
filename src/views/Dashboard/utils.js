const fetch = require('node-fetch')
const config = require('views/Dashboard/config.json');
export function get_token(code){
  const oauthResult =  fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: config.client_id,
					client_secret: config.clientSecret,
					code: code,
					grant_type: 'authorization_code',
					redirect_uri: config.redirect_uri,
					scope: 'identify guilds',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
  console.log(oauthResult);
  return oauthResult.access_token;
}


export function get_user_data(token) {
  var retVal=null
  console.log("TOKEN PASSED "+token)
  fetch('https://discord.com/api/users/@me', {
			headers: {
        mode: 'no-cors',
				authorization: `Bearer ${token}`
			}
		})
			.then(result => result.json())
			.then(console.log)
			.catch(console.error);
      
			// .then(response => {
			// 	// const { username, discriminator } = response;
			// 	// document.getElementById('info').innerText += ` ${username}#${discriminator}`;
			// })
			// .catch(console.error);
	// };
};