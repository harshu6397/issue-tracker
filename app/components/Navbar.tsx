import Link from 'next/link';
import { SiIssuu } from 'react-icons/si';

const Navbar = () => {
    const navLinks = [
        { title: 'Dashboard', path: '/' },
        { title: 'issues', path: '/issues' },
    ]

    return (
        <nav className="">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 border-b-2 hover:border-gray-700 dark:hover:border-gray-300">
                <Link href="/">
                    <div className="text-gray-700 text-xl md:text-2xl flex items-center">
                        <SiIssuu className="inline-block align-text-top mr-2" />
                        Issues Tracker
                    </div>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className="block py-2 px-3 text-dark bg-dark rounded md:bg-transparent md:text-dark md:p-0 text-gray-500 hover:text-gray-800">
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar