import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="w-11/12 container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/write" className="text-white">
                Write
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
