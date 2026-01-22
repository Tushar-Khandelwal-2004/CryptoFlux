"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathName = usePathname();
    return (
        <header>
            <div className='main-container inner'>
                <Link href="/">
                    <Image src="/images/logo2.png" alt="Crypto Flux Logo" width={132} height={40} className='w-fit '></Image>
                </Link>

                <nav>
                    <Link href="/" className={cn('nav-link', {
                        "is-active": pathName === '/',
                        "is-home": true
                    })}>Home</Link>

                    <p>Search Modal</p>

                    <Link href="/coins" className={cn('nav-link', {
                        "is-active": pathName === '/coins',
                    })}>All Coins</Link>

                </nav>
            </div>
        </header>
    )
}
