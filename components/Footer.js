export default function Footer() {
  return (
    <>
      <div className="w-full h-20 sticky top-0 text-sm">
        <div className="container mx-auto px-4 h-full">
          <footer className="flex-1 justify-between items-center h-full w-full grid grid-cols-2">
            <div>
              Created with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="link-underline"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="link-underline"
              >
                Tailwind CSS
              </a>
              .
            </div>
            <div className="ms-auto">&copy; Petra Sivonen 2023. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </>
  );
}
