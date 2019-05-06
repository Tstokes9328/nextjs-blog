import Link from 'next/link';

const Navbar = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/blogs">
            <a>Blogs</a>
        </Link>
        <Link href="/news">
            <a>News</a>
        </Link>
    </div>
);

export default Navbar;