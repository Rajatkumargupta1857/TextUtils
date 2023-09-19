import React,{useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
     const handleUpClick=()=>{
       let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase has been completed" ,"success");
     }
     const handleDownClick=()=>{
       let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase has been completed" ,"success");
     }
     const Clear=()=>{
       let newText="";
        setText(newText);
        props.showAlert("Clear All Text" ,"success");
     }

     const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("All text copped" ,"success");
     }
     const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Deleted" ,"success");
     }

     const handleOnChange=(event)=>{
        setText(event.target.value);
     }

  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#23243a'}}>
            <h1 className='mb-2'>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#23243a':'white' ,color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea> 
                {/* check this code in line 49 */}
            </div>
            
                    <button type="button" disabled={text.length===0} className="btn btn-primary  mx-1  my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" disabled={text.length===0} className="btn btn-primary  mx-1  my-1" onClick={handleDownClick}>Convert to LowerCase</button>
                    <button type="button" disabled={text.length===0} className="btn btn-primary  mx-1  my-1" onClick={Clear}>Clear</button>
                    <button type="button" disabled={text.length===0} className="btn btn-primary  mx-1  my-1" onClick={handleCopy}>Copy Text</button>
                    <button type="button" disabled={text.length===0} className="btn btn-primary  mx-1  my-1" onClick={handleExtraSpace}>Delete Extra Space</button>
            </div>

           <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#23243a'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} Charector</p>
            <p>{.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minute to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Nothing to Preview here"}</p>
           </div>
    </>
  )
}
