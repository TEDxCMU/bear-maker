import Image from "next/image"
export default function Display(props) {
    return <>
    <div>hiiii</div>
    <Image src={props.imgUrl} width="500" height="500" alt="character profile image"></Image>
    </>
}