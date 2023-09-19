// import React, { useState } from 'react'
import React  from 'react'

export default function About(props) {

   //  const [myStyle, setmyStyle] = useState({
   //      color:"black",
   //      backgroundColor:"white"
   //   });
   let myStyle = {
      color: props.mode==="dark"? 'white':'#23243a',
      backgroundColor: props.mode==="dark"? '#23243a':'white',
      border:"1px solid",
      borderColor:props.mode==="dark"? 'white':''
   }
  return (
    <div className='Container mx=3'>
                <h1 className='my-3' style={{color: props.mode==="dark"? 'white':'#23243a'}}>About Us</h1>
                            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                               <strong>Analyze Your text</strong> 
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or

                            </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                             <strong>Free to use</strong> 
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse ">
                            <div className="accordion-body" style={myStyle}>
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.


                            </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>Browser Compatible</strong> 
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                            </div>
                            </div>
           
                            </div>


    </div>
  )
}
