// import { BiHappyAlt } from "react-icons/bi";
// import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";
// import { HiOutlineEmojiHappy } from "react-icons/hi";
// import { ImCrying } from "react-icons/im";
// import { FaCoffee } from "react-icons/fa";
import "./mood.css";
const Mood = () => {

    // const [happy,setHappyCount]
  return (
    <div>
      <div className="heading ">How's you feeling??</div>
      <div className="moodContainer">
        <div style={{display:"inline-block"}} className="card one">
          <p className="parent"> Happy</p>
          <p className="hidden">
            {" "}
            That's great
            <br />
          </p>
        </div>
        <div style={{display:"inline-block"}} className="card two">
          {" "}
          <p className="parent"> Good</p>
          <p className="hidden">
            {" "}
            That's great
            <br />
          </p>{" "}
        </div>
        <div style={{display:"inline-block"}} className="card two">
          {" "}
          <p className="parent"> Normal</p>
          <p className="hidden">
            {" "}
            That's great
            <br />
          </p>{" "}
        </div>
        <div style={{display:"inline-block"}} className=" card four">
          {" "}
          <p className="parent"> Sad</p>
          <p className="hidden">
            {" "}
            That's great
            <br />
          </p>{" "}
        </div>
        <div style={{display:"inline-block"}} className="card five">
          {" "}
          <p className="parent"> Awful</p>
          <p className="hidden">
            {" "}
            That's great
            <br />
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mood;
