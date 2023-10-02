"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import { useState } from "react";

export default function CharMaker() {
    const [img, setImg] = useState("/placeholder.png");
    const updateImage = (e) => {  
        console.log(e.currentTarget)
       setImg(e.currentTarget.getAttribute("data"))
    }; 
   
    return <>
        <Display imgUrl={img}></Display>
        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
        <div>hi</div> 
    </>
}