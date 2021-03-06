import React, {Component} from 'react';
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this
      .signup
      .bind(this);
  }

  signup(res, type) {
    let postData;
    /*if (type === 'facebook' && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }*/

    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      PostData('signup', postData).then((result) => {
        //let responseJson = result;
        //sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({redirect: true});
      });
    } else {}
  }

  render() {

    if (this.state.redirect || window.sessionStorage.getItem('userData')) {
      return (<Redirect to={{
                pathname: '/home',
                state: { name: window.sessionStorage.getItem('userData') }
              }}/>)
    }

    const responseGoogle = (response) => {
      window.sessionStorage.setItem("userData", JSON.stringify(response));
      this.signup(response, 'google');
    }

    return (
      <div>
            <GoogleLogin
              clientId="201522050071-dt45rma1lcrcau4vvffld7i99lp6b8ci.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}/>
      </div>
    );
  }
}

export default Welcome;