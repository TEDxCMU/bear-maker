"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import Navbar from "./components/navbar"
import Button from "./components/buttons"
import constantObject from "./components/constants"
import { useState } from "react";

export default function CharMaker() {
    const [img, setImg] = useState("/placeholder.png");
    const updateImage = (e) => {  
        console.log(e.currentTarget)
       setImg(e.currentTarget.getAttribute("data"))
    }; 
   
    return <>
    <div>
        <Navbar/>
        <div className="bodyWrap">
            <section className="pageRight">
                <div className="optionBarWrapper">
                    <h1> Selections </h1>
                    <h2> Head </h2>
                    <div className="optionBar">
                        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
                    </div>
                    <h2> Body </h2>
                    <div className="optionBar">
                        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
                    </div>
                    <h2> Hands </h2>
                    <div className="optionBar">
                        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
                    </div>
                    <h2> Background </h2>
                    <div className="optionBar">
                        <Selector images={constantObject.faces} updateFunction={updateImage}></Selector>
                    </div>
                </div>
            </section>
            <section className="pageLeft">
                <div className="displayWrapper">
                    <h1> Dashboard </h1>
                    <div>
                        <Button select="Restart"/><Button select="Random"/><Button select="Download"/>
                    </div>
                    <br/>
                    <Display imgUrl={img}></Display>
                </div>
            </section>
        </div>
    </div>
    </>
}