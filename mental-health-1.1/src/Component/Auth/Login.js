import React from 'react';
import fire from '../config/fire'
import Landing from '../Landing/landingIndex'
import './myStyle.css'

class Login extends React.Component{


    

    login(){
        const email=document.querySelector("#email").value;
        const password= document.querySelector("#Password").value;
        localStorage.setItem("Logged in once", '1');
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u)=>{
            console.log("Succesfully Logged in");
            window.alert("You're logged in to Aware");
            console.log(u);
            const UID=u.user.uid;
            console.log("User ID: ")
            console.log(UID); 
            console.log("Email Add: "+email)
            localStorage.setItem('UID', UID);
            localStorage.setItem("EMail", email);        
        })
        .catch((err)=>{
            console.log("Error: "+err.toString());
        })
    }
    signup(){
        const email= document.querySelector("#email").value;
        const password= document.querySelector("#Password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u)=> {
            console.log("Successfully Signed in");
        })
        .catch((err)=>{
            console.log("Error : "+err.toString());
        })
    }
    render()
    {
        return(
            <div style={{textAlign: 'center' }}>
            <div>
                <h3 style={{color: 'black',                            
                            fontFamily:'sans-serif'                            
                             }}>Log in to your account</h3>
                <div>Email</div>

                <input style={{border: '2px solid black',
                fontFamily: 'sans-serif',
                padding: '10px 20px',
            WebkitBorderRadius:'5px',
            color: 'black'}} id="email" placeholder="Email" type="text"/>
            </div>
            <div>
                <div>Password</div>
                <input style={{
                    border: '2px solid black',
                    padding: '10px 20px',
                    fontFamily: 'sans-serif',
                    WebkitBorderRadius:'5px',
                    color: 'black'}} 
            id="Password" placeholder="Password" type="password"/>
            </div>
            <button style={{
                margin: '15px',
                backgroundColor: "#e7e7e7",
                border: "none",
                color: 'black',                    
                padding: '10px 20px',
                fontFamily: 'sans-serif',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                WebkitBorderRadius: '12px'                
            }}
             onClick={this.login}>Login </button>

            <button style={{
                margin: '15px',
                backgroundColor: "#555555",
                border: "none",
                color: 'white',                    
                padding: '10px 20px',
                fontFamily: 'sans-serif',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                WebkitBorderRadius: '12px',                
            }} onClick={this.signup}>Sign Up</button>                        
            </div>    
        )
    }
}
export default Login;