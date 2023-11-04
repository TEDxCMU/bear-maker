import Image from "next/image"
export default function Display(props) {
    const imgs = props.imgs
    const noImageUrl = "/no-image.png"
    const width = "750"
    const height = "750"
    return <>
        <Image className="bear_image" src="/base.png" width={width} height={height} alt="character profile image"></Image>
        {imgs.head && imgs.head != noImageUrl ? <Image className="bear_image" src={imgs.head} width={width} height={height} alt="character profile image"></Image>:<></>}
        {imgs.body && imgs.body != noImageUrl ? <Image className="bear_image" src={imgs.body} width={width} height={height} alt="character profile image"></Image>:<></>}
        {imgs.hand1 && imgs.hand1 != noImageUrl ? <Image className="bear_image" src={imgs.hand1} width={width} height={height} alt="character profile image"></Image>:<></>}
        {imgs.hand2 && imgs.hand2 != noImageUrl ? <Image className="bear_image" src={imgs.hand2} width={width} height={height} alt="character profile image"></Image>:<></>}
    </>
}