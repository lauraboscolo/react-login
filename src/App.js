import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Feed from './components/Feed'
import Profile from './components/Profile'
import PostView from './components/PostView'
import Editor from './components/Editor'
import SignInWith from './components/SignInWith'
class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
            { !pathname.includes('editor') ? <Header /> : '' }
            <SignInWith />
                <Switch>                
                    <Route exact path="/" component={Feed} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/postview/:id" component={PostView} />
                    <Route path="/editor" component={Editor} />
                    <Route path="**" component={Feed} />
                </Switch>
            </div>
        );
    }
}
export default App;

/*import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "Login with Facebook and Google using ReactJS and RESTful APIs",
      home: false
    }
  }

  render() {
    return (
      <div>
          <Routes name={this.state.appName}/>
      </div>
    );
  }
}
export default App; */