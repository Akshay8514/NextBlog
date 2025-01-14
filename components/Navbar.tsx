import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-gray-800 p-4'>
            <ul className='flex space-x-4'>
                <li>
                    <Link href="/"><a className='text-white'>Home</a></Link>
                </li>
                <li>
                    <Link href="/archive"><a className='text-white'>Archive</a></Link>
                </li>
                <li>
                    <Link href="/about"><a className='text-white'>About</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a className='text-white'>Contact</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar