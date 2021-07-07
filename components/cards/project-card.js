import Image from 'next/image'
import Link from 'next/link'


export default function Project_card({title, image, description, link}) {
    return (
        <Link href={link}>
            <a target="_blank">
                <div>
                    <Image
                        src={image}
                        alt={title}
                        layout="responsive"
                        width="453px"
                        height="320px"
                    />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </Link>
      )
}