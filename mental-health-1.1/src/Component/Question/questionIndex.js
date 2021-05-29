import { questions } from "../../db";
import { Component } from "react";
import "./questionStyle.css";
import { Button } from "react-bootstrap";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",      
      ques1: Math.floor(Math.random() * (10 - 5 ) ) + 5,
      ques2: Math.floor(Math.random() * (4 - 0 ) ) + 0,
      ques3: Math.floor(Math.random() * (15 - 11 ) ) + 11,
      ques4: Math.floor(Math.random() * (20 - 16 ) ) + 16,
      ques5: Math.floor(Math.random() * (24 - 21 ) ) + 21
    };    
    this.addAnswer = this.addAnswer.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);

   
  }

  
  
  
  addAnswer(no, event) {
    if (no === 1) {
      this.setState({
        ans1: event.target.value,
      });
    } else if (no === 2) {
      this.setState({
        ans2: event.target.value,
      });
    } else if (no=== 3) {
      this.setState({
        ans3: event.target.value,
      });
    } else if (no === 4) {
      this.setState({
        ans4: event.target.value,
      });
    } else if (no === 5) {
      this.setState({
        ans5: event.target.value,
      });
    }
  }

  saveAnswer(event) {
    console.log(
      this.state.ans1 +
        "\n" +
        this.state.ans2 +
        "\n" +
        this.state.ans3 +
        "\n" +
        this.state.ans4 +
        "\n" +
        this.state.ans5
    );
    localStorage.setItem('A1',this.state.ans1);
    localStorage.setItem('A2',this.state.ans2);
    localStorage.setItem('A3',this.state.ans3);
    localStorage.setItem('A4',this.state.ans4);
    localStorage.setItem('A5',this.state.ans5);
    localStorage.setItem('Q1',questions[this.state.ques1].ques);
     localStorage.setItem('Q2',questions[this.state.ques2].ques);
     localStorage.setItem('Q3',questions[this.state.ques3].ques);
     localStorage.setItem('Q4',questions[this.state.ques4].ques);
     localStorage.setItem('Q5',questions[this.state.ques5].ques);
    event.preventDefault();
  }

  
  render() {
    
    
    return (
      
      <div className="main">
      
        <p className="heading">Here are few questions to answer:)</p>

        <form onSubmit={this.saveAnswer}>
          <div className="content">
            <label
              for="ques1"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "0",
                color:'#ffe6e6',
                fontSize: '24px'               
                
              }}
            >
              1. {questions[this.state.ques1].ques}
            </label>
            <br />
            <textarea
              id="ques1"
              type="text"
              placeholder="Your answer"
              className="ques-text-area"
              spellCheck="false"
              required="true"
              value={this.state.ans1}
              onChange={(event) => {
                this.addAnswer(1, event);
              }}
            />
            <br />
            <label
              for="ques2"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "0",
                color:'#ffe6e6',
                fontSize: '24px'
              }}
            >
              2. {questions[this.state.ques2].ques}
            </label>
            <br />
            <textarea
              id="ques2"
              type="text"
              placeholder="Your answer"
              className="ques-text-area"
              spellCheck="false"
              required="true"
              value={this.state.ans2}
              onChange={(event) => {
                this.addAnswer(2, event);
              }}
            />
            <br />
            <label
              for="ques3"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "0",
                color:'#ffe6e6',
                fontSize: '24px'
              }}
            >
              3. {questions[this.state.ques3].ques}
            </label>
            <br />
            <textarea
              id="ques3"
              type="text"
              placeholder="Your answer"
              className="ques-text-area"
              spellCheck="false"
              required="true"
              value={this.state.ans3}
              onChange={(event) => {
                this.addAnswer(3, event);
              }}
            />
            <br />
            <label
              for="ques4"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "0",
                color:'#ffe6e6',
                fontSize: '24px'
              }}
            >
              4. {questions[this.state.ques4].ques}
            </label>
            <br />
            <textarea
              id="ques4"
              type="text"
              placeholder="Your answer"
              className="ques-text-area"
              spellCheck="false"
              required="true"
              value={this.state.ans4}
              
              onChange={(event) => {
                this.addAnswer(4, event);
              }}
            />
            <br />
            <label
              for="ques5"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "0",
                color:'#ffe6e6',
                fontSize: '24px'
              }}
            >
              5. {questions[this.state.ques5].ques}
            </label>
            <br />
            <textarea
            
              id="ques5"
              type="text"
              placeholder="Your answer"
              className="ques-text-area"
              spellCheck="false"
              required="true"
              value={this.state.ans5}
              onChange={(event) => {
                this.addAnswer(5, event);
              }}
            />

            <br />
          </div>
          <Button
            className="save-button"
            type="submit"
            variant="info"
            value="Submit"
            style={{fontSize:"2vw"}}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

//console.log("x = ",questions[Math.floor(Math.random() * 25) + 1].ques);

export default Question;
