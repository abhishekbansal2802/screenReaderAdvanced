import Link from "next/link";

export default function Navbar() {
    return <div className="bg-white p-4 w-full h-16 shadow flex justify-between items-center">
        <div className="text-2xl font-medium text-gray-700">
            <Link href="/">
                EyeHear
            </Link>
        </div>
        <div>
            <ul className="flex gap-4 text-sm font-gray-600">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/resources">Resources</Link></li>
                <li><Link href="/downloads">Downloads</Link></li>
            </ul>
        </div>
    </div>
}   