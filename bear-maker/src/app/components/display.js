import Image from "next/image"
export default function Display(props) {
    const imgs = props.imgs
    const noImageUrl = "/no-image.png"
    return <>
        {imgs.background ? <Image className="bear_image" src={imgs.background} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        <Image className="bear_image" src="/base.png" fill style={{objectFit:"contain"}} sizes="100vw" priority alt="character profile image"></Image>
        {imgs.pants ? <Image className="bear_image" src={imgs.pants} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.shoes ? <Image className="bear_image" src={imgs.shoes} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.body ? <Image className="bear_image" src={imgs.body} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand1 ? <Image className="bear_image" src={imgs.hand1} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand2 ? <Image className="bear_image" src={imgs.hand2} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.head ? <Image className="bear_image" src={imgs.head} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
    </>
}