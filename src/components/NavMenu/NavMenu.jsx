import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavMenuStyles } from "./NavMenuStyles";

export function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  /*============== CHANGE COLOR NAVBAR ====================*/
  // const changeBackground = () => {
  //   console.log(window.scrollY);

  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  return (
    <NavMenuStyles>
      {/* <div className={navbar ? "navbar nav-active" : "navbar"}> */}
      <div className="navbar">
        <nav className="wrapper container">
          <div data-aos="fade" className="nav__logo">
            <NavLink to="/">
              <h2>PEDRO MORENO</h2>
            </NavLink>
          </div>
          <div
            data-aos="fade"
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <HiOutlineMenuAlt3 className="mobileMenu" />
          </div>
          <ul className={!showNav ? "navItems hide-item" : "navItems"}>
            <div
              className="closeNavIcon"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <li>
              <NavLink
                to="/"
                exact
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
                activeClassName="active"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Projectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Contactos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavMenuStyles>
  );
}
