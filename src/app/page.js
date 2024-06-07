import Heading from "./sections/Heading";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="main">
      <Heading/>
      <div className="gap-36 lg:gap-80 main-content">
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </main>
  );
}
