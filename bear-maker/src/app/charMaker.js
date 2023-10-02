"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import { useState } from "react";

export default function CharMaker() {
    const [img, setImg] = useState("/placeholder.png");
    const updateImage = (e) => {  
        // setImg('./faces/sparkle-grin.png'); 
        console.log(e)
    }; 
           //need to find a way to only do onClick on specific image
    return <>
        <Display imgUrl={img}></Display>
        <Selector images={constantObject.faces} onClick={updateImage}></Selector>
        <div>hi</div>
    </>
}