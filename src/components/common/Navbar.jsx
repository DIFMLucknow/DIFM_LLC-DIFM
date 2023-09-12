import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { close, menu } from "../../assets";
import { navLinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Update the document title based on the active route
    const path = location.pathname;
    let title = "DO IT FOR ME LLC"; // Default title

    // Define title mappings based on routes
    if (path === '/') {
      title += " / Home Page";
    } else if (path === "/about") {
      title += " / About Us";
    } else if (path === "/contact") {
      title += " / Contact Us";
    } else if (path === '/services') {
      title += " / Services";
    } else if (path === '/portfolio') {
      title += ' / Portfolio';
    } else if (path === '/careers') {
      title += ' / Careers';
    } else if (path === '/investor') {
      title += ' / Investor';
    } else if (path === '/team') {
      title += ' / Our Team';
    } else if (path === '/investor') {
      title += ' / Investor';
    } else if (path === '/term') {
      title += ' / Terms And Conditions';
    } else if (path === '/privacy') {
      title += ' / Privacy And Policy';
    } else if (path === '/admin') {
      title += ' / Admin Login';
    } else if (path === '/dashboard') {
      title += ' / Admin Dashboard';
    }
    // Add more route-to-title mappings as needed

    document.title = title;

    // Update the active link based on the current path
    const activeLink = navLinks.find((nav) => nav.id === path);
    if (activeLink) {
      setActive(activeLink.title);
    }
  }, [location]);

  const activeLink = "text-white font-normal border-t-2  border-b-2 border-cyan-300";

  // Handle Home link click
  const handleHomeLinkClick = () => {
    setActive("Home");
    scrollToTop();
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar -mt-4">
      {/* This navbar for desktop version */}
      <Link to="/" onClick={handleHomeLinkClick}>
        <img
          src={logo}
          alt="DO IT FOR ME LLC"
          className="w-[259px] h-[107px]"
        />
      </Link>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? activeLink : "text-dimWhite  border-animation"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleNavItemClick(nav.title)}
          >
            <Link  onClick={() => scrollToTop()} to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* This navbar for mobile version */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } z-10 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? activeLink : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleNavItemClick(nav.title)}
              >
                 <Link to={nav.id} 
                 onClick={() => {
                  setToggle(!toggle);
                  scrollToTop();
                }}
                >{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
