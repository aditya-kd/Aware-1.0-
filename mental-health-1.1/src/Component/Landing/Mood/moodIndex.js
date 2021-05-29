import { Component } from "react";
import "./mood.css";


class Mood extends Component {
constructor(){
super();
    // const [happy,setHappyCount]    
    
}
change1()
{
  console.log('Hello World')
  localStorage.setItem('M1','Happy')
}
change2()
{
  console.log('Hello World')
  localStorage.setItem('M2','Good')
}
change3()
{
  console.log('Hello World')
  localStorage.setItem('M3','Normal')
}
change4()
{
  console.log('Hello World')
  localStorage.setItem('M4','Sad')
}
change5()
{
  console.log('Hello World')
  localStorage.setItem('M5','Awful')
}
render(){

  return (
    <div>
      <div className="heading " >How's you feeling??</div>
      <div className="moodContainer">
        
        <div style={{borderRadius:'24px'}} className="card one" >
          <button style={{backgroundColor: '#fce0c2', /* Green */
                          borderRadius: '24px',
                          fontFamily:'sans-serif',
                          color: '#4a464a',
                          padding: '4px 55px',
                          textAlign:'center',
                          border:'none',
                        textDecoration:'none',
  fontSize: '18px'}} onClick={this.change1}>Happy!</button>
        </div>

        <div style={{borderRadius:'24px'}} className="card two" >
          <button
          style={{backgroundColor: '#fce0c2', /* Green */
          borderRadius: '24px',
          color: '#4a464a',
          fontFamily:'sans-serif',
          padding: '4px 55px',
          textAlign:'center',
          textDecoration:'none',
          border:'none',
          fontSize: '18px'}}
           onClick={this.change2}>Good</button>
        </div>
        
        <div style={{borderRadius:'24px'}} className="card two">
        <button
        style={{backgroundColor: '#fce0c2', /* Green */
        borderRadius: '24px',
        color: '#4a464a',
        fontFamily:'sans-serif',
        padding: '4px 55px',
        textAlign:'center',
        textDecoration:'none',
        border:'none',
        fontSize: '18px'}}
         onClick={this.change3}>Normal</button>
        </div>

        <div style={{borderRadius:'24px'}} className=" card four">
        <button
        style={{backgroundColor: '#fce0c2', /* Green */
        borderRadius: '24px',
        color: '#4a464a',
        padding: '4px 55px',
        fontFamily:'sans-serif',
        textAlign:'center',
        textDecoration:'none',
        border:'none',
        fontSize: '18px'}}
         onClick={this.change4}>Sad</button>
        </div>

        <div style={{borderRadius:'24px'}} className="card five">
        <button
        style={{backgroundColor: '#fce0c2', /* Green */
        borderRadius: '24px',
        border:'none',
        color: '#4a464a',
        padding: '4px 55px',
        fontFamily:'sans-serif',
        textAlign:'center',
        textDecoration:'none',
        fontSize: '18px'}}
         onClick={this.change5}>Awful</button>

        </div>

      </div>
    </div>
  );
};
}
export default Mood;
