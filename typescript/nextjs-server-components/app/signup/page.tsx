'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './styles.module.css'

const SignUp: React.FC = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { name, email }
      await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.page}>
      <form onSubmit={submitData}>
        <h1>Signup user</h1>
        <input
          autoFocus
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="text"
          value={email}
        />
        <input disabled={!name || !email} type="submit" value="Signup" />
        <Link className={styles.back} href="/">
          or Cancel
        </Link>
      </form>
    </div>
  )
}

export default SignUp
