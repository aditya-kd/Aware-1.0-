import { questions } from "../../db";
import react, { Component } from "react";
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
      ques1: Math.floor(Math.random() * 23) + 1,
      ques2: Math.floor(Math.random() * 22) + 1,
      ques3: Math.floor(Math.random() * 21) + 1,
      ques4: Math.floor(Math.random() * 20) + 1,
      ques5: Math.floor(Math.random() * 19) + 1,
    };
    this.addAnswer = this.addAnswer.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }
  getRndInteger() {
    return Math.floor(Math.random() * (26 - 1 + 1) ) + 1;
  }
  
  findidLlist()
  { 
    var idList=[]
    while(idList.length<5)
    {
      let id=this.getRndInteger();
      if( idList.includes(id)===false)
      idList.push(id);
    }    
    return idList;
  }

  randomGen() {
    var idList=this.findidLlist();
    console.log("GEN ID LIST")
    console.log(idList);
    return idList;
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
    event.preventDefault();
  }

  render() {
    let idListfinal=this.randomGen();
    console.log("FINAL ID LIST")
    console.log(idListfinal);
    return (
      
      <div className="main">
      {/* {c = this.randomGen()}
      {console.log(c)} */}
        <p className="heading">Here are few questions to answer:)</p>

        <form onSubmit={this.saveAnswer}>
          <div className="content">
            <label
              for="ques1"
              style={{
                fontFamily: "Antic Slab",
                fontWeight: "bold",
              }}
            >
              1. {questions[0].ques}
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
                fontFamily: "Antic Slab",
                fontWeight: "bold",
              }}
            >
              2. {questions[1].ques}
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
                fontFamily: "Antic Slab",
                fontWeight: "bold",
              }}
            >
              3. {questions[2].ques}
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
                fontFamily: "Antic Slab",
                fontWeight: "bold",
              }}
            >
              4. {questions[4].ques}
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
              required="true"
              onChange={(event) => {
                this.addAnswer(4, event);
              }}
            />
            <br />
            <label
              for="ques5"
              style={{
                fontFamily: "Antic Slab",
                fontWeight: "bold",
              }}
            >
              5. {questions[5].ques}
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
