export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bottom-0 h-20 text-xs leading-6 lg:text-sm footer">
          <footer className="max-w-screen-xl mx-auto h-full flex justify-center items-center p-9">
            &copy; Petra Sivonen, {currentYear}.
          </footer>
      </div>
    </>
  );
}
