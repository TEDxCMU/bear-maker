"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import UIButton from "./components/button"
import { useState } from "react";
import mergeImages from 'merge-images';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

export default function CharMaker() {
    const [imgs, setImgs] = useState({
        "background": "/alpha.png",
        "head": "/alpha.png",
        "body": "/alpha.png",
        "hand1": "/alpha.png",
        "hand2": "/alpha.png",
        "pants": "/alpha.png",
        "shoes": "/alpha.png",
    });

    const updateBg = (e) => {  
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "background": newImg})
    }; 
    const updateHead = (e) => {  
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "head": newImg})
    }; 
    const updateBody = (e) => {  
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "body": newImg})
    }; 
    const updateHand1 = (e) => {  
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "hand1": newImg})
    }; 
    const updateHand2 = (e) => {  
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "hand2": newImg})
    };
    const updatePants = (e) => {
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "pants": newImg})
    };
    const updateShoes = (e) => {
        let newImg = e.currentTarget.getAttribute("data") == "/no-image.png" ? "/alpha.png" : e.currentTarget.getAttribute("data")
        setImgs({...imgs, "shoes": newImg})
    };

    const downloadImage = () => {
        
        mergeImages([imgs.background, "./base.png", imgs.pants, imgs.shoes, imgs.body, imgs.hand1, imgs.hand2, imgs.head]).then(b64 => {
            const link = document.createElement('a');
            link.href = b64;
            link.download = 'image.jpg';
            link.click();
        });
      };
   
    return <>
    <div className="body">
        <div className="pageLeft">
            <div className="selectors">
                <h1> Selections </h1>
                <Selector category="Background" images={constantObject.background} updateFunction={updateBg}></Selector>
                <Selector category="Head" images={constantObject.head} updateFunction={updateHead}></Selector>
                <Selector category="Left Hand" images={constantObject.hand1} updateFunction={updateHand1}></Selector>
                <Selector category="Right Hand" images={constantObject.hand2} updateFunction={updateHand2}></Selector>
                <Selector category="Clothes" images={constantObject.body} updateFunction={updateBody}></Selector>
                <Selector category="Pants" images={constantObject.pants} updateFunction={updatePants}></Selector>
                <Selector category="Shoes" images={constantObject.shoes} updateFunction={updateShoes}></Selector>
            </div>
        </div>
        <div className="pageRight">
            <h1> Display </h1>
            <UIButton className="selectButton" select="Reset"/>
            <UIButton className="selectButton" select="Download" onClick={downloadImage}/>
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

