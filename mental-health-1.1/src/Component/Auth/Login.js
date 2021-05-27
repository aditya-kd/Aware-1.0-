import React from 'react';
import fire from '../config/fire'

class Login extends React.Component{
    login(){
        
    }
    signup(){

    }
    render()
    {
        return(
            <div className={StyleSheet.email_div} style={{textAlign: 'center' }}>
            <div>
                <div>Email</div>
                <input id="email" placeholder="Email" type="text"/>
            </div>
            <div>
                <div>Password</div>
                <input id="Password" placeholder="Password" type="text"/>
            </div>
            <button style={{margin: '10px'}} onClick={this.login}>Login </button>
            <button style={{margin: '10px'}} onClick={this.signup}>Sign Up</button>                        
            </div>    
        )
    }
}
export default Login;