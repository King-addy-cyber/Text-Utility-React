import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("New text here")
  let handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case", "success");
  };
  let handlelowClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case", "success");
  };

  let handlClearClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "success");
  };
  let handelOnChange = (event) => {
    // console.log("handel On Change");
    setText(event.target.value);
  };

  const hendelCopy = () => {
    console.log("I am copy function");
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copyed Successfully", "success");
  };

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from the text", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="MyBox"
            rows="3"
            // style={{
            //   backgroundColor: props.mode === "dark" ? "grey" : "white",

            //   color: props.mode === "dark" ? "white" : "black",
            // }}
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper case
        </button>

        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          Convert to Lower case
        </button>

        <button className="btn btn-primary mx-2" onClick={handlClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={hendelCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handelExtraSpaces}>
          Remove Ext Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Write text to preview it here"}</p>
      </div>
    </>
  );
}
