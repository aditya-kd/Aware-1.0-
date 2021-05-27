import { questions } from "../../db";
import react, { Component } from "react";
import "./questionStyle.css"

class Question extends Component {
  constructor() {
    super();
    this.state = {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",
    };}

    render(){
    return (
      <div className="main" >
      <p className="heading">Here are few questions to answer:)</p>
        <form className="content">
          <label for="ques1" className="content">{questions[Math.floor(Math.random() * 24) + 1].ques}</label><br/>
          <textarea id ="ques1" type="text" placeholder="Your answer"/><br/>
          <label for="ques2">{questions[Math.floor(Math.random() * 24) + 1].ques}</label><br/>
          <textarea id="ques2" type="text" placeholder="Your answer"/><br/>
          <label for="ques3">{questions[Math.floor(Math.random() * 24) + 1].ques}</label><br/>
          <textarea id="ques3" type="text" placeholder="Your answer"/><br/>
          <label for="ques4">{questions[Math.floor(Math.random() * 24) + 1].ques}</label><br/>
          <textarea id="ques4" type="text" placeholder="Your answer"/><br/>
          <label for="ques5">{questions[Math.floor(Math.random() * 24) + 1].ques}</label><br/>
          <textarea id ="ques5" type="text" placeholder="Your answer"/><br/>
        </form>
      </div>
    );
  }
}

//console.log("x = ",questions[Math.floor(Math.random() * 25) + 1].ques);

export default Question;
