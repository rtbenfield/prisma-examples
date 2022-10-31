'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './styles.module.css';

const Header: React.FC = () => {
  // `usePathname` only works in client components?
  // returns `undefined` on server
  const pathname = usePathname()
  const isActive: (route: string) => boolean = (route) => pathname === route

  return (
    <nav className={styles.header}>
      <div className={styles.left}>
        <Link className={styles.bold} data-active={isActive('/')} href="/">
          Blog
        </Link>
        <Link data-active={isActive('/drafts')} href="/drafts">
          Drafts
        </Link>
      </div>
      <div className={styles.right}>
        <Link data-active={isActive('/signup')} href="/signup">
          Signup
        </Link>
        <Link data-active={isActive('/create')} href="/create">
          + Create draft
        </Link>
      </div>
    </nav>
  )
}

export default Header
