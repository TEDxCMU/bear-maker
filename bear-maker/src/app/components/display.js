import Image from "next/image"
export default function Display(props) {
    return <>
    <Image src={props.imgUrl} width="750" height="750" alt="character profile image"></Image>
    </>
}