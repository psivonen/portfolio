import Link from "next/link";

export default function Navbar({ toggle }) {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex-1 justify-between items-center h-full w-full grid grid-cols-2">
            <div className="logo">Petra Sivonen</div>
            <button
              type="button"
              className="inline-flex items-center md:hidden ms-auto"
              onClick={toggle}
            >
              {/* Menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ms-auto">
              <li>
              <Link href="#about">Kuka olen</Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="nav-link">
                  Ota yhteyttä
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
