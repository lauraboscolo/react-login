import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
class Home extends Component {

  constructor(props){
   super(props);
   this.state = {
   name:'',
   redirect: false,
   products:[],
   pid:''
   };
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("userData"));
    console.log(JSON.parse(sessionStorage.getItem("userData")));
    let data = JSON.parse(sessionStorage.getItem("userData"));
    
    this.setState({ name : data.profileObj.name })
  }

  render() {

    if(!sessionStorage.getItem('userData') || this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

    if(this.state.pid > 0){
      return (<Redirect to={'/checkout'}/>)
    }

    return (
      <div >
      Welcome {this.state.givenName}
      </div>
    );
  }
}

export default Home;