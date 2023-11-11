import Image from "next/image"
export default function Display(props) {
    const imgs = props.imgs
    const noImageUrl = "/no-image.png"
    return <>
        <Image className="bear_image" src="/base.png" fill style={{objectFit:"contain"}} sizes="100vw" priority alt="character profile image"></Image>
        {imgs.head ? <Image className="bear_image" src={imgs.head} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.body ? <Image className="bear_image" src={imgs.body} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand1 ? <Image className="bear_image" src={imgs.hand1} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
        {imgs.hand2 ? <Image className="bear_image" src={imgs.hand2} fill style={{objectFit:"contain"}} sizes="100vw" alt="character profile image"></Image>:<></>}
    </>
}