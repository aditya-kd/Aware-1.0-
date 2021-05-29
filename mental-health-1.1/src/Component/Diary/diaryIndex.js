import "./diaryStyle.css";
import { Button } from "react-bootstrap";
import { Component } from "react";


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
    console.log("New Diary: ", this.state.diary);
    event.preventDefault();
    localStorage.setItem("diaryData", this.state.diary);
    // addToFirestore()
  }
  addDiary(event) {
    this.setState({
      diary: event.target.value,
    });
   
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
          <Button
            className="save-button"
            type="submit"
            variant="info"
            value="Submit"
            style={{
              fontSize:"2vw"
            }}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default Diary;