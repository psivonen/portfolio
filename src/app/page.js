import Heading from "./sections/Heading";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="main">
      <Heading/>
      <About/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}
