import { Link } from "react-scroll";
export default function Header({ links, logo }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          {links?.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                smooth={true}
                duration={500}
                activeClass="active"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="btn btn-primary"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
