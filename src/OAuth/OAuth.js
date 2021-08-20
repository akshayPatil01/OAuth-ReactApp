import React,{Component} from 'react';
//import axios from 'axios';
import OAuthService from "../Service/OAuthService";

class OAuth extends Component {
    onClickHandler = () => {
       OAuthService.prototype.gitHubAuth();
    }

    render() {
        return(
            <div>
                <button disabled={true} onClick={this.onClickHandler}>Login with GitHub</button>
            </div>
        );
    }
}

export default OAuth; 