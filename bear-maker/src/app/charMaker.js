"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import Button from "./components/button"
import Navbar from "./components/navbar"
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
    <div className="body">
        <div className="pageLeft">
            <div className="selectors">
                <h1> Selections </h1>
                <Selector category="Head" images={constantObject.head} updateFunction={updateHead}></Selector>
                <Selector category="Left Hand" images={constantObject.hand1} updateFunction={updateHand1}></Selector>
                <Selector category="Right Hand" images={constantObject.hand2} updateFunction={updateHand2}></Selector>
                <Selector category="Clothes" images={constantObject.body} updateFunction={updateBody}></Selector>
            </div>
        </div>
        <div className="pageRight">
            <h1> Display </h1>
            <Button className="selectButton" select="Reset"/>
            <Button className="selectButton" select="Download" onClick={downloadImage}/>
            {/* <FacebookShareButton url={img}>
                Share on Facebook 
            </FacebookShareButton> 
                
            <TwitterShareButton url={img}>
                Share on Twitter
            </TwitterShareButton> */}
            <div className="display">
            <Display imgs={imgs}></Display>
            </div>
        </div>
    </div>
    </>
    
}

