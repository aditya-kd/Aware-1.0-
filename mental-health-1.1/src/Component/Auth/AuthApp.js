import Home from './Home.js'
import Login from './Login.js'
import fire from '../config/fire';
import {Component} from 'react';

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
              {this.state.user ?(<Home style={{height:"90vh"}}/>): (<Login style ={{height:"90vh"}}/>)}
          </div>
      );
  }

}
export default AuthApp;