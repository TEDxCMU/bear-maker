import Image from "next/image"
export default function Display(props) {
    const imgs = props.imgs
    const noImageUrl = "/no-image.png"
    const width = "750"
    const height = "750"
    return <>
        <Image className="bear_image" src="/base.png" fill style={{objectFit:"contain"}} alt="character profile image"></Image>
        {imgs.head && imgs.head != noImageUrl ? <Image className="bear_image" src={imgs.head} fill style={{objectFit:"contain"}} alt="character profile image"></Image>:<></>}
        {imgs.body && imgs.body != noImageUrl ? <Image className="bear_image" src={imgs.body} fill style={{objectFit:"contain"}} alt="character profile image"></Image>:<></>}
        {imgs.hand1 && imgs.hand1 != noImageUrl ? <Image className="bear_image" src={imgs.hand1} fill style={{objectFit:"contain"}} alt="character profile image"></Image>:<></>}
        {imgs.hand2 && imgs.hand2 != noImageUrl ? <Image className="bear_image" src={imgs.hand2} fill style={{objectFit:"contain"}} alt="character profile image"></Image>:<></>}
    </>
}