'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './styles.module.css'

const Draft: React.FC = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, content, authorEmail }
      await fetch(`/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      router.push('/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.page}>
      <form onSubmit={submitData}>
        <h1>Create Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          onChange={(e) => setAuthorEmail(e.target.value)}
          placeholder="Author (email address)"
          type="text"
          value={authorEmail}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input
          disabled={!content || !title || !authorEmail}
          type="submit"
          value="Create"
        />
        <Link className={styles.back} href="/">
          or Cancel
        </Link>
      </form>
    </div>
  )
}

export default Draft
