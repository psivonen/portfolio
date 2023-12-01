export default function Footer() {
  return (
    <>
      <div className="w-full h-20 top-0 text-sm">
        <div className="container mx-auto px-4 h-full">
          <footer className="h-full flex justify-center items-center flex-col gap-2 lg:flex-row lg:justify-between">
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
            <div>&copy; Petra Sivonen 2023. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </>
  );
}
