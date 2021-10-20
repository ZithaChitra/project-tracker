import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Navbar.module.css'

import logo from '../public/images/logo.svg'

function Navbar() {
    return (
        <div className={`${styles.navbar} flex flex-jc-sb flex-ai-c pad pad-lr`}>
            <div className={`${styles.navbar__logo}`}>
                <Image src={logo} alt='logo' layout='fill'/>
            </div>

            <div className={`${styles['navbar__links-primary']} flex flex-ai-c hide-for-mobile`}>
                <Link href='/'><a>Products</a></Link>
                <Link href='/'><a>Features</a></Link>
                <Link href='/'><a>Pricing</a></Link>
                <div id={`${styles.dot}`}>.</div>
                <Link href='/'><a id={`${styles.login}`}>Login</a></Link>
            </div>

            <div className={`${styles['navbar__links-secondary']} hide-for-desktop`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar
