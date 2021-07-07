import { BLOG_NAME } from "../../lib/constants"
import Image from 'next/image'


export default function Intro_card() {
    return (
        <div>
            <Image
                src="/content/intro-image.png"
                alt="SPEDION Blog Banner Image"
                layout="responsive"
                width="453px"
                height="320px"
            />
            <h2>Willkomen im {BLOG_NAME}</h2>
            <p>Small text for Blog welcome message</p>
        </div>
      )
}