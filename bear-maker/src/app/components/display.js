import Image from "next/image"
import { useState, useCallback, useEffect } from "react";

export default function Display(props) {
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
    const imgs = props.imgs
    const noImageUrl = "/no-image.png"
    return <>
    
    {!resize ?(
    <>
        {imgs.background ? <Image className="bear_image" src={imgs.background} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        <Image className="bear_image" src="/base.png" fill style={{objectFit:"contain"}} sizes="100vw" priority alt="character profile image"></Image>
        {imgs.pants ? <Image className="bear_image" src={imgs.pants} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.shoes ? <Image className="bear_image" src={imgs.shoes} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.body ? <Image className="bear_image" src={imgs.body} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand1 ? <Image className="bear_image" src={imgs.hand1} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand2 ? <Image className="bear_image" src={imgs.hand2} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.head ? <Image className="bear_image" src={imgs.head} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
    </>
    ):(
    <div>
        {imgs.background ? <Image className="bear_image" src={imgs.background} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        <Image className="bear_image" src="/base.png" fill style={{objectFit:"contain"}} sizes="100vw" priority alt="character profile image"></Image>
        {imgs.pants ? <Image className="bear_image" src={imgs.pants} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.shoes ? <Image className="bear_image" src={imgs.shoes} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.body ? <Image className="bear_image" src={imgs.body} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand1 ? <Image className="bear_image" src={imgs.hand1} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand2 ? <Image className="bear_image" src={imgs.hand2} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.head ? <Image className="bear_image" src={imgs.head} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
    </div>
    )}
    </>

}