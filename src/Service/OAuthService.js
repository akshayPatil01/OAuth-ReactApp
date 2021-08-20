import axios from 'axios';

export default class OAuthService {
    gitHubAuth() {
    
        axios.get('https://github.com/login/oauth/authorize?scope=user:email&client_id=fd69192f249af87c0b17', {
            headers: {
              "Access-Control-Allow-Origin" : "*"
            }})
            .then(response => console.log(response.data));
    }
}