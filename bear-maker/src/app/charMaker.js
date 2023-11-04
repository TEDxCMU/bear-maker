"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton} from 'react-share';
import {FacebookIcon, LinkedinIcon, PinterestIcon,TwitterIcon,} from 'react-share';
import download_button from "./images/download_button.png"

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
        <button onClick={downloadImage}>
            <img src={download_button} alt="Download" />
        </button>
        <div style={{ display: 'flex', gap: '10px' }}>
            <FacebookShareButton url={img}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton url={img}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton url={img}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <PinterestShareButton url={img}>
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
        </div>
    </>
    
}

