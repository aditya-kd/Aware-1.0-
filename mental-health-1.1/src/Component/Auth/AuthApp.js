import Home from './Home.js'
import Login from './Login.js'
import fire from '../config/fire';
import {Component} from 'react';
import Landing from '../Landing/landingIndex.js';

class AuthApp extends Component{
    constructor(props){
        super(props);
        this.state={user: null,}

        this.authListener= this.authListener.bind(this);
    }

    componentDidMount()
  {
    this.authListener();
  }
  authListener() {

    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }else {
        this.setState({user: null});
    }

    })

  }

  render(){
    var loginChance=localStorage.getItem('Logged in once');
      return (
          <div>
              {this.state.user ?(<Home/>): (<Login/>)}
          </div>
      );
  }

}
export default AuthApp;