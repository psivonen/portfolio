import Link from "next/link";

export default function Custom404() {
  return (
    <main className="main">
      <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
        <h1 className="text-white text-5xl font-bold">404</h1>
        <p>Oho, tätä sivua ei ole ole olemassa.</p>
        <Link
          href="/"
          className="link-underline"
        >
          Palaa etusivulle
        </Link>
      </div>
    </main>
  );
}
