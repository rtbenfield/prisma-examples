import type { Post, User } from '@prisma/client'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const PostDisplay: React.FC<{ post: Post & { author: User } }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <Link href={`/p/${post.id}`}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
    </Link>
  )
}

export { PostDisplay as Post }
