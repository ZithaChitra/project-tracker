import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import heroe_image from '../public/images/illustration-devices.svg'
import styles from '../styles/components/Heroe.module.css'

function Heroe() {
    return (
        <div className={`${styles.heroe} pad pad-lr`}>


            <div className={`${styles.heroe__image}`}>
                <Image src={heroe_image} alt='heroe image' />
            </div>

            <div className={`${styles.heroe__text}`}>
                <h4 className={`flex flex-ai-c`}>
                    <span> New  </span>
                    Monograph Dashboard
                </h4>

                <h1>Powerful insights <br /> into your team</h1>

                <p>
                    Project planning and time tracking <br /> for agile teams
                </p>

                <div className={`${styles.inline} flex flex-ai-c`}>
                <Link href='/'><a className={`cto`}>Schedule a demo</a></Link>
                    <h4>to see a preview</h4>
                </div>
            </div>
        </div>
    )
}

export default Heroe
