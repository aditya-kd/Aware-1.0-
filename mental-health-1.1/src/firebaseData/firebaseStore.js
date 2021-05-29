import firebase from "firebase";
import "../../src/Component/config/fire";

const db = firebase.firestore();
export const addToFirestore = () => {
  const userRef = db
    .collection("UserData")
    .doc(window.localStorage.getItem("UID"))
    .collection("Diary")
    .add(
      {
        Userdiary: localStorage.getItem("diaryData"),
        mood: localStorage.getItem("M1"),
        answer1: localStorage.getItem("A1"),
        answer2: localStorage.getItem("A2"),
        answer3: localStorage.getItem("A3"),
        answer4: localStorage.getItem("A4"),
        answer5: localStorage.getItem("A5"),
        question1: localStorage.getItem("Q1"),
        question2: localStorage.getItem("Q2"),
        question3: localStorage.getItem("Q3"),
        question4: localStorage.getItem("Q4"),
        question5: localStorage.getItem("Q5"),
      },
      { merge: true }
    );

    console.log("Data Uploaded to Firebase")    
};