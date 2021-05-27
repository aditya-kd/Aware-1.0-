import React from 'react';
import fire from '../config/fire';

class Home extends React.Component{
    
    logout()
    {

    }
    render()
    {
        return (
            <div>
                <h1>You are Logged in</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;