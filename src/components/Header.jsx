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
