import ReactMarkdown from 'react-markdown'
import prisma from '../../../lib/prisma'
import { makeSerializable } from '../../../lib/util'
import { PostActions } from './actions'

export default async function Post(props: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(props.params.id) },
    include: { author: true },
  })

  let title = post.title
  if (!post.published) {
    title = `${title} (Draft)`
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>By {post?.author?.name || 'Unknown author'}</p>
      <ReactMarkdown children={post.content} />
      <PostActions post={makeSerializable(post)} />
    </div>
  )
}
