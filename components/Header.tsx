"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className='main-container inner'>
                <Link href="/">
                    <Image src="/images/logo2.png" alt="Crypto Flux Logo" width={132} height={40} className='w-fit '></Image>
                </Link>

                <nav>
                    <Link href="/">Home</Link>
                    <p>Search Modal</p>

                <Link href="/coins">All Coins</Link>
                    
                </nav>
            </div>
        </header>
    )
}
