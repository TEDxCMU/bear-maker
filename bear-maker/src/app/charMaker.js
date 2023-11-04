"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from 'react-share';

export default function CharMaker() {
    const [imgs, setImgs] = useState({
        "head": null,
        "body": null,
        "hand1": null,
        "hand2": null,
    });

    const updateHead = (e) => {  
        console.log(e.currentTarget)
        console.log(e.currentTarget.getAttribute("data"))
        setImgs({"head": e.currentTarget.getAttribute("data"), "body": imgs.body, "hand1": imgs.hand1,"hand2": imgs.hand2})
    }; 
    const updateBody = (e) => {  
        setImgs({"head": imgs.head, "body": e.currentTarget.getAttribute("data"), "hand1": imgs.hand1, "hand2": imgs.hand2})
    }; 
    const updateHand1 = (e) => {  
        setImgs({"head": imgs.head, "body": imgs.body, "hand1": e.currentTarget.getAttribute("data"), "hand2": imgs.hand2})
    }; 
    const updateHand2 = (e) => {  
        setImgs({"head": imgs.head, "body": imgs.body, "hand1": imgs.hand1, "hand2": e.currentTarget.getAttribute("data")})
    }; 

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = img;
        link.download = 'image.jpg';
        link.click();
      };
   
    return <>
        <Display imgs={imgs}></Display>
        <div className="selectors">
        <Selector category="Head" images={constantObject.head} updateFunction={updateHead}></Selector>
        <Selector category="Hand 1" images={constantObject.hand1} updateFunction={updateHand1}></Selector>
        <Selector category="Hand 2" images={constantObject.hand2} updateFunction={updateHand2}></Selector>
        <Selector category="Body" images={constantObject.body} updateFunction={updateBody}></Selector>
        </div>
        <button onClick={downloadImage}>Download</button>
        {/* <FacebookShareButton url={img}>
            Share on Facebook 
        </FacebookShareButton> 
            
        <TwitterShareButton url={img}>
            Share on Twitter
        </TwitterShareButton> */}
    </>
    
}

