import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        props.showAlert("Converted to Uppercase", "success");
        setText(newtext);
    }
    const handleExtractClick = () => {
        // console.log("extract was clicked");
        const emailRegex = /\b[\w-]+(?:\.[\w-]+)*@[\w-]+(?:\.[\w-]+)+\b/g; // This is the regular expression to match email addresses
        const emailAddresses = text.match(emailRegex); // This will return an array of email addresses found in the paragraph
        console.log(emailAddresses);
        props.showAlert("Email Extracted", "success");

        setText(emailAddresses[0]);
    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newtext = text.toLowerCase();
        props.showAlert("Converted to Lowercase", "success");

        setText(newtext);
    }
    const handleClearClick = () => {
        let newtext = ('');
        props.showAlert("Text Cleared", "success");
        setText(newtext);
    }
    const handleOnChange = (event) => {
        console.log('onchange');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text" //wrong
    // setText = "new text"//right
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1"></label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>

                <button className="btn btn-secondary mx-1" onClick={handleExtractClick}>Extract Email</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                <h1>Email addresses</h1>
                <p>{text}</p>
            </div>
        </>
    )
}

