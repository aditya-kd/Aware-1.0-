import { Button } from "react-bootstrap";
import { addToFirestore } from "../../firebaseData/firebaseStore";
import "./aboutStyle.css";
import { useEffect, useState } from "react";
import firebase from "firebase";

const About = () => {
  const [detail, setDetail] = useState([]);
  const [disable,setDisable] = useState(false)
  useEffect(() => {
    fetchDetail();
  }, []);
  const db = firebase.firestore();

  const fetchDetail = () => {
    const detailRef = db
      .collection("UserData")
      .doc(localStorage.getItem("UID"))
      .collection("Diary");
    let temp = [...detail];
    const data = detailRef.get().then((data) => {
      data.docs.forEach((item, i) => {
        temp.push(item.data());
      });
      setDetail(temp);
    });
  };

  const addingAll = (event) => {
    console.log("done");
    event.preventDefault();
    if(disable!==true){
    addToFirestore();
    }
  };
  const settin=()=>{
    if(disable === false){
      setDisable(true)
    }
    else{
      setDisable(false)
    }
  }
  return (
    <div className="about-container">
      <div className="text-block" style={{overflowY:"scroll"}}>
        <form onSubmit={(event) => addingAll(event)}>
          Would you like to save all your data? (Refresh Page to See Previous
          data)
          <br />
          <Button type="submit" value="Submit" onClick={()=>settin} >
            Yes
          </Button>
          <br />
          <Button>No</Button>
        </form>

        {detail.map((item, key) => {
          return (
            <div key={key}> Day{key+1}<br/>
            <p>Diary:-<br/></p>
              <p>{item.Userdiary}</p>
              <p>Mood:-<br/></p>
              <p>{item.mood}</p>
              <p>Q/A:- <br/></p>
              <p>Ques1: </p>
              <p>{item.question1}</p>
              <p>Ans1: </p>
              <p>{item.answer1}</p><br/>
              <p>Ques1: </p>
              <p>{item.question2}</p>
              <p>Ans2: </p>
              <p>{item.answer2}</p><br/>

              <p>Ques1: </p>
              <p>{item.question3}</p>
              <p>Ans3: </p>
              <p>{item.answer3}</p><br/>
              <p>Ques1: </p>
              <p>{item.question4}</p>
              <p>Ans4: </p>
              <p>{item.answer4}</p><br/>
              <p>Ques1: </p>
              <p>{item.question5}</p>
              <p>Ans5: </p>
              <p>{item.answer5}</p><br/>
            </div>
          );
        })}
        {console.log(detail)}
      </div>
    </div>
  );
};

export default About;
