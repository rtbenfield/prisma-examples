import prisma from '../lib/prisma'
import { Post as PostDisplay } from './post'
import styles from './styles.module.css'

export default async function Blog() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  return (
    <div className={styles.page}>
      <h1>My Blog</h1>
      <main>
        {feed.map((post) => (
          <div key={post.id} className={styles.post}>
            <PostDisplay post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}
