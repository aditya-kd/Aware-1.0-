import React from "react";
import { Main } from "./landingStyle";
import Navbar from "../Navbar/navbarIndex";
import Mood from "./Mood/moodIndex"

const Landing = () => {
  const quotes = [
    "“There are times when we stop, we sit still. We listen and breezes from a whole other world begin to whisper.”",
    "“Breath is the power behind all things…. I breathe in and know that good things will happen.”",
    "“Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.”",
    "“Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.”",
    "“Calmness is the cradle of power.”",
    "“Simply let experience take place very freely, so that your open heart is suffused with the tenderness of true compassion.”",
    "“Don’t try to force anything. Let life be a deep let-go. God opens millions of flowers every day without forcing their buds.”",
    "“Understand this and be free: we are not in our bodies; our bodies are inside us.”",
    "“Set peace of mind as your highest goal, and organize your life around it.",
    "“Many a calm river begins as a turbulent waterfall, yet none hurtles and foams all the way to the sea.”",
    "“Doing something that is productive is a great way to alleviate emotional stress. Get your mind doing something that is productive.”",
    "“Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff.”",
    "“Give your stress wings and let it fly away.”",
    "“The day she let go of the things that were weighing her down, was the day she began to shine the brightest.”",
  ];

  const [number,setNumber] = React.useState(0)
  React.useEffect(()=>{
      const interval = setInterval(()=>setNumber(Math.floor(Math.random()*14)+1),5000);
      return ()=>{
          clearInterval(interval);
      };
  },[]);

  
  return (
      <div>
    <Main>
 
      <p style={{opacity:"1",fontSize:"3vw",fontWeight:"bolder",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",height:"70vh",color:"white"}}>{quotes[number]}</p>
     <p></p>
    </Main>
    <Mood/>
   
    </div>
  );
};

export default Landing;
