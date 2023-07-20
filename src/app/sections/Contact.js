import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl">Ota yhteyttä</h2>
      <a href="mailto:petra.sivonen@gmail.com" className="contact-link text-lg">
        petra.sivonen@gmail.com
      </a>
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
  );
}
