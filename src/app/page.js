import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="main">
      <link href="/dist/output.css" rel="stylesheet"></link>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
        <div>
          <h1 className="font-bold">
            Petra
            <br />
            Sivonen
          </h1>
        </div>
        <div>
          <p className="text-xl leading-8">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bright vixens jump;
            dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
            blow, vexing daft Jim.
          </p>
          <div className="socials pt-3">
            <a
              href="https://github.com/psivonen"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-3">
        <div>
          <h2 className="text-2xl">Kuka olen?</h2>
        </div>
        <div>
          <p className="leading-7">
            Olen motivoitunut ja oma-aloitteisella asenteella varustettu
            koodarin alku, jolta löytyy visuaalista näkemystä ja web-ohjelmointi
            osaamista opiskelujen sekä omien projektien kautta. Tavoitteena on
            päästä kehittymään ja oppimaan uutta inspiroivassa työympäristössä.
            <br/>
            <br/>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
            my big quiz. 
            <br/>
            <br/>
            Vapaa ajalla käytän aikaa viherkasvieni parissa,
            harrastan valokuvausta sekä teen käsitöitä. Ottamiani valokuvia voi
            katsella <a href="https://www.instagram.com/petrasivonen/" target="_blank" className="link-underline">Instagramissa</a>.
          </p>
        </div>
      </div>
      <div id="contact" className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl">Ota yhteyttä</h2>
          <a href="mailto:petra.sivonen@gmail.com" className="contact-link text-lg">petra.sivonen@gmail.com</a>
        <div className="socials pt-3">
            <a
              href="https://github.com/psivonen"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
      </div>
    </main>
  );
}
