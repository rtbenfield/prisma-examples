import prisma from '../../lib/prisma'
import { Post } from '../post'
import styles from './styles.module.css'

export default async function Drafts() {
  const drafts = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })
  return (
    <div className={styles.page}>
      <h1>Drafts</h1>
      <main>
        {drafts.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}
