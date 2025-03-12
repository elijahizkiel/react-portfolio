import { Link } from "react-scroll";

export default function Header({ links }) {
  return (
    <header>
      <nav>
        <ul>
          {links?.map((link) => (
            <li key={link.id}>
              <Link to={link.url} smooth={true} duration={500}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary" to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
