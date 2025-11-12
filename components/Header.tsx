import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[rgba(255,247,220,1)] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <span className="text-xl">Daily Disaffirmation App</span> */}
          <Link href="/" className="text-xl">
            Daily Disaffirmation App
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
