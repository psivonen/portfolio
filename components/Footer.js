export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bottom-0 fixed h-20 text-xs leading-6 lg:text-sm footer">
          <footer className="max-w-screen-xl mx-auto h-full flex justify-center items-center flex-col md:flex-row md:justify-between p-9">
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
            <div>&copy; Petra Sivonen {currentYear}. All rights reserved.</div>
          </footer>
      </div>
    </>
  );
}
