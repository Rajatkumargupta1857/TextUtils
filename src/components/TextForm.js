import React,{useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
     const handleUpClick=()=>{
       // console.log("Handle was clicked" + text);
       let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase has been completed" ,"success");
     }
     const handleDownClick=()=>{
       // console.log("Handle was clicked" + text);
       let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase has been completed" ,"success");
     }
     const Clear=()=>{
       // console.log("Handle was clicked" + text);
       let newText="";
        setText(newText);
        props.showAlert("Clear All Text" ,"success");
     }

     const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("All text copped" ,"success");
     }
     const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Deleted" ,"success");
     }

     const handleOnChange=(event)=>{
       // console.log("Handle was handleOnChange");
        setText(event.target.value);
     }




   //text="new Text"; //wrong way to set text
   //setText=("new Text"); //correct way to set text
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#23243a'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode==='light'?'dark':'light') ,color:props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea> 
                {/* check this code in line 49 */}
            </div>
            
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={Clear}>Clear</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleCopy}>Copy Text</button>
                    <button type="button" className="btn btn-primary  mx-1" onClick={handleExtraSpace}>Delete Extra Space</button>
            </div>

           <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#23243a'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Charector</p>
            <p>{.008 * text.split(" ").length} Minute to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Enter Something in TextBox to Preview here"}</p>
           </div>
    </>
  )
}
