'use client'

import type { Post } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'

async function publish(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  })
}

async function destroy(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  })
}

export const PostActions: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter()
  return (
    <>
      {!post.published && (
        <button onClick={() => publish(post.id).then(() => router.push('/'))}>
          Publish
        </button>
      )}
      <button onClick={() => destroy(post.id).then(() => router.push('/'))}>
        Delete
      </button>
    </>
  )
}
