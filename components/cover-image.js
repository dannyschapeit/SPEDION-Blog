import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, post, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div>
      {post ? (
        <Link as={`/posts/${post}`} href="/posts/[post]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
