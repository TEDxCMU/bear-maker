"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from 'react-share';

export default function CharMaker() {
    const [img, setImg] = useState("/placeholder.png");
    const updateImage = (e) => {  
        console.log(e.currentTarget)
       setImg(e.currentTarget.getAttribute("data"))
    }; 
    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = img;
        link.download = 'image.jpg';
        link.click();
      };
   
    return <>
        <Display imgUrl={img}></Display>
        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
        <div>hi</div> 
        <button onClick={downloadImage}>Download</button>
        <FacebookShareButton url={img}>
            Share on Facebook 
        </FacebookShareButton> 
            
        <TwitterShareButton url={img}>
            Share on Twitter
        </TwitterShareButton>
    </>
    
}

