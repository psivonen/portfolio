import Link from 'next/link';

export default function Navbar({ toggle }) {

  return (
    <div className="w-full h-20 top-0 z-10 fixed navbar">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full w-full p-10">
        <Link href="/" className="hover:text-white">
          <div className="text-lg">Petra Sivonen</div>
        </Link>
        <button
          type="button"
          className="inline-flex items-center lg:hidden"
          onClick={toggle}
        >
          {/* Menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
        <ul className="hidden lg:flex gap-x-3 text-white">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about">
              Minusta
            </Link>
          </li>
          <li>
            <Link href="/#portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="nav-link">
              Ota yhteyttä
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
