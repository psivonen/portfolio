import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Heading() {
  return (
    <div className="section-container w-full z-10 mt-11">
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
      <div>
        <h1 className="font-bold">
          Petra
          <br />
          Sivonen
        </h1>
      </div>
      <div>
        <p className="text-2xl leading-9">
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
    </div>
  );
}
