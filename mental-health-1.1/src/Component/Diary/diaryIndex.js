import "./diaryStyle.css"
import {Button} from "react-bootstrap"

const Diary = () =>{
    return (
        <div >
        <textarea className="text-area" placeholder="Write whatever you feel!!"/>
        <Button className="save-button" variant="info">Save</Button>
           
    
 
        </div>
    )
}

export default Diary;