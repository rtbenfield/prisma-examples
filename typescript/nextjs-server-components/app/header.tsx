import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './styles.module.css'

const Header: React.FC = () => {
  const pathname = usePathname()
  const isActive: (route: string) => boolean = (route) => pathname === route

  return (
    <nav className={styles.header}>
      <div className="left">
        <Link href="/" legacyBehavior>
          <a className="bold" data-active={isActive('/')}>
            Blog
          </a>
        </Link>
        <Link href="/drafts" legacyBehavior>
          <a data-active={isActive('/drafts')}>Drafts</a>
        </Link>
      </div>
      <div className="right">
        <Link href="/signup" legacyBehavior>
          <a data-active={isActive('/signup')}>Signup</a>
        </Link>
        <Link href="/create" legacyBehavior>
          <a data-active={isActive('/create')}>+ Create draft</a>
        </Link>
      </div>
    </nav>
  )
}

export default Header
