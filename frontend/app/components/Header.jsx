"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
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
              {localStorage.getItem("token") ? (
                <button
                  className="text-red-500 px-2 py-1 rounded-md font-semibold bg-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="text-blue-500 px-2 py-1 rounded-md font-semibold bg-white"
                  onClick={(e) => router.push("/login")}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
