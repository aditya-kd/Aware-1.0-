import "./diaryStyle.css";
import { Button } from "react-bootstrap";
import react, { Component } from "react";
import Login from "../Auth/Login"

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diary: "",
    };

    this.addDiary = this.addDiary.bind(this);
    this.submitDiary = this.submitDiary.bind(this);
  }

  submitDiary(event) {
    console.log("dff", this.state.diary);
    event.preventDefault();
    localStorage.setItem('diaryData',this.state.diary)
   
  }
  addDiary(event) {
    this.setState({
      diary: event.target.value,
    });
    console.log("ssf", this.state.diary);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitDiary}>
        <div className="diary-container">
          <textarea
            className="text-area"
            placeholder="Write whatever you feel!!"
            value={this.state.diary}
            onChange={this.addDiary}
            spellCheck="false"
            required="true"
          />
          </div>
          {console.log(Login.c)}
          <Button
            className="save-button"
            type="submit"
            variant="info"
            value="Submit"
          >
            Save
          </Button>
        </form>
        {console.log("props" + this.props)}
      </div>
    );
  }
}

export default Diary;
