"use client"
import Selector from "./components/selector"
import Display from "./components/display"
import constantObject from "./components/constants"
import UIButton from "./components/button"
import { useState, useCallback, useEffect } from "react";
import mergeImages from 'merge-images';

export default function CharMaker() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    
    
    const toggleDropdown = (e) => {
        if (e === 0)
        {
            setIsOpen(!isOpen);
            setIsOpen1(false); 
            setIsOpen2(false); 
            setIsOpen3(false); 
            setIsOpen4(false); 
            setIsOpen5(false); 
            setIsOpen6(false); 
        }
        if (e === 1)
        {
            setIsOpen1(!isOpen1);
            setIsOpen(false); 
            setIsOpen2(false); 
            setIsOpen3(false); 
            setIsOpen4(false); 
            setIsOpen5(false); 
            setIsOpen6(false); 
        }
        if (e === 2)
        {
            setIsOpen2(!isOpen2);
            setIsOpen(false); 
            setIsOpen1(false); 
            setIsOpen3(false); 
            setIsOpen4(false); 
            setIsOpen5(false); 
            setIsOpen6(false); 
        }
        if (e === 3)
        {
            setIsOpen3(!isOpen3);
            setIsOpen(false); 
            setIsOpen1(false); 
            setIsOpen2(false); 
            setIsOpen4(false); 
            setIsOpen5(false); 
            setIsOpen6(false); 
        }
        if (e === 4)
        {
            setIsOpen4(!isOpen4);
            setIsOpen(false); 
            setIsOpen1(false); 
            setIsOpen2(false); 
            setIsOpen3(false); 
            setIsOpen5(false); 
            setIsOpen6(false); 
        }
        if (e === 5)
        {
            setIsOpen5(!isOpen5);
            setIsOpen(false); 
            setIsOpen1(false); 
            setIsOpen2(false); 
            setIsOpen3(false); 
            setIsOpen4(false); 
            setIsOpen6(false); 
        }
        if (e === 6)
        {
            setIsOpen6(!isOpen6);
            setIsOpen(false); 
            setIsOpen1(false); 
            setIsOpen2(false); 
            setIsOpen3(false); 
            setIsOpen4(false); 
            setIsOpen5(false); 
        }
    };

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

    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: ${width}px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTargetReached(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return targetReached;
      };

    const resize = useMediaQuery(700)
   
    return <>

        {!resize ? (
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
        ):(
            <div className="body">
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
            <div className="pageLeft">
                <div className="selectors">
                    <h1> Selections </h1>
                    <div>
                    {isOpen ?(
                        <Selector category="Background" images={constantObject.background} id = {0} clicked = {toggleDropdown} updateFunction={updateBg}></Selector>
                    ):(
                        <div onClick={() => toggleDropdown(0)} className="selectionMobile">
                            <p className="selectionText">Background</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen1 ?(
                        <Selector category="Head" images={constantObject.head} id = {1} clicked = {toggleDropdown} updateFunction={updateHead}></Selector>
                    ):(
                        <div  onClick={() => toggleDropdown(1)} className="selectionMobile">
                            <p className="selectionText">Head</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen2 ?(
                         <Selector category="Left Hand" images={constantObject.hand1} id = {2} clicked = {toggleDropdown} updateFunction={updateHand1}></Selector>
                    ):(
                        <div onClick={() => toggleDropdown(2)} className="selectionMobile">
                            <p className="selectionText">Left Hand</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen3 ?(
                        <Selector category="Right Hand" images={constantObject.hand2} id = {3} clicked = {toggleDropdown} updateFunction={updateHand2}></Selector>
                    ):(
                        <div  onClick={() => toggleDropdown(3)} className="selectionMobile">
                            <p className="selectionText">Right Hand</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen4 ?(
                        <Selector category="Clothes" images={constantObject.body} id = {4} clicked = {toggleDropdown} updateFunction={updateBody}></Selector>
                    ):(
                        <div onClick={() => toggleDropdown(4)} className="selectionMobile">
                            <p className="selectionText">Clothes</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen5 ?(
                         <Selector category="Pants" images={constantObject.pants} id = {5} clicked = {toggleDropdown} updateFunction={updatePants}></Selector>
                    ):(
                        <div onClick={() => toggleDropdown(5)} className="selectionMobile">
                            <p className="selectionText">Pants</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    <div>
                    {isOpen6 ?(
                         <Selector category="Shoes" images={constantObject.shoes} id = {6} clicked = {toggleDropdown} updateFunction={updateShoes}></Selector> 
                    ):(
                        <div onClick={() => toggleDropdown(6)} className="selectionMobile">
                            <p className="selectionText">Shoes</p>
                            <p><i class="arrow down"></i></p>
                        </div>
                    )}
                    </div>

                    {/* Older Code
                    
                    <Selector category="Background" images={constantObject.background} updateFunction={updateBg}></Selector>
                    <Selector category="Head" images={constantObject.head} updateFunction={updateHead}></Selector>
                    <Selector category="Left Hand" images={constantObject.hand1} updateFunction={updateHand1}></Selector>
                    <Selector category="Right Hand" images={constantObject.hand2} updateFunction={updateHand2}></Selector>
                    <Selector category="Clothes" images={constantObject.body} updateFunction={updateBody}></Selector>
                    <Selector category="Pants" images={constantObject.pants} updateFunction={updatePants}></Selector>
                    <Selector category="Shoes" images={constantObject.shoes} updateFunction={updateShoes}></Selector> 
                    
                    */}
                </div>
            </div>
            </div>


        )}
    </>
    
}

