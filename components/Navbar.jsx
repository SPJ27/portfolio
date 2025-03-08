import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>Saksham.</div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Projects</Link>
                    </li>
                    <li>
                        <Link href='/'>About</Link>
                    </li>
                    <li>
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <Link href="/">Download Resume</Link>
        </div>
    </div>
  )
}

export default Navbar