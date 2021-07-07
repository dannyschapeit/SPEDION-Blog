import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Author from '../components/author'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div>
        <div>
          <DateFormatter dateString={date} />
          <Author dataString={author} />
        </div>
      </div>
    </>
  )
}
