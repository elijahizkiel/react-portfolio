/**
 * Header component that renders a responsive navigation bar with links and a logo.
 * The navigation bar adapts to the screen size, displaying a horizontal list for larger screens
 * and a collapsible vertical list for smaller screens.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.links - An array of link objects to be displayed in the navigation bar.
 * @param {string} props.links[].id - A unique identifier for each link.
 * @param {string} props.links[].url - The URL or section ID the link points to.
 * @param {string} props.links[].text - The display text for the link.
 * @param {string} props.logo - The source URL for the logo image.
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * const links = [
 *   { id: '1', url: 'home', text: 'Home' },
 *   { id: '2', url: 'about', text: 'About' },
 *   { id: '3', url: 'services', text: 'Services' },
 * ];
 * const logo = '/path/to/logo.png';
 *
 * <Header links={links} logo={logo} />
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Header({ links, logo }) {
  const [hidden, setHidden] = useState(window.innerWidth < 780);
  useEffect(() => {
    const handleResize=()=>{
      setHidden(window.innerWidth < 780);
    }
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  }, []);
  const navList = useRef();
  const toggleMenu = () => {
    setExpanded((prev) => !prev);
    navList.current.classList.toggle("not-expanded");
  };
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {!hidden ? (
        <nav className="nav horizontal-list">
          <ul className="nav-links ">
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
      ) : (
        <nav className={"nav vertical-list"}>
          {!expanded ? (
            <div className="hamburger-menu toggle-btn" onClick={toggleMenu}>
              &#9776;
            </div>
          ) : (
            <div className="close-menu toggle-btn" onClick={toggleMenu}>
              &#10006;
            </div>
          )}
          <ul
            ref={navList}
            className={"nav-links vertical-list not-expanded"}
            aria-expanded={expanded}
            onClick={() => {
              if (expanded === "true") {
                toggleMenu();
              }
            }}
          >
            {links?.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <Link
              className="btn btn-primary"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
