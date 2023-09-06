import React,{useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
     const handleUpClick=()=>{
       // console.log("Handle was clicked" + text);
       let newText=text.toUpperCase();
        setText(newText);
     }
     const handleDownClick=()=>{
       // console.log("Handle was clicked" + text);
       let newText=text.toLowerCase();
        setText(newText);
     }
     const Clear=()=>{
       // console.log("Handle was clicked" + text);
       let newText="";
        setText(newText);
     }


     const handleOnChange=(event)=>{
       // console.log("Handle was handleOnChange");
        setText(event.target.value);
     }




   //text="new Text"; //wrong way to set text
   //setText=("new Text"); //correct way to set text
  return (
    <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={Clear}>Clear</button>
            </div>

           <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Charector</p>
            <p>{.008 * text.split(" ").length} Minute to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
           </div>
    </>
  )
}
