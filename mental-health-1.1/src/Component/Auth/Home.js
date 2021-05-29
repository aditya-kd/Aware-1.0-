import React from 'react';
import fire from '../config/fire';

class Home extends React.Component{
    
    logout()
    {
        fire.auth().signOut();
        console.log("User Logged out");
        window.alert("You're Logged out of Aware.");
        localStorage.clear();
    }
    render()
    {
        return (
            <div style={{textAlign: 'center',height:"90vh",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <h1 style={{color: 'black', fontFamily:'sans-serif'}}>You are Logged in</h1>
                <button  style={{
                    margin: '15px',                    
                    border: "2px solid #f44336",                              
                    padding: '10px 20px',
                    fontFamily: 'sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    WebkitBorderRadius: '12px'      ,
                    backgroundColor: 'white',
                    color: 'black',
                    
                    
                }} onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;