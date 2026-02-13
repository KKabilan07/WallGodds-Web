import { NavLink } from "react-router-dom";
import Style from "./NavBar.module.css";
import ThemeToggle from "../../ThemeModule/ThemeToggle";
import { useState, useRef, useEffect } from "react";

// Simple Profile User Icon Component
const ProfileIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);

  const isDark = localStorage.getItem("theme") === "dark";

  const Logo = isDark
    ? "/WallGodds_logo_for_dark_mode.svg"
    : "/WallGodds_Logo_for_light_mode.svg";
  const Github_arrow = isDark
    ? "/Github_redirect_arrow_up_lite.svg"
    : "/Github_redirect_arrow_up_dark.svg";
  const Search = isDark ? "/Search_new_light.svg" : "/Search_new_dark.svg";

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <NavLink to="/">
          <img src={Logo} alt="WallGodds Logo" data-logo />
        </NavLink>
      </div>
      <div className={Style.navigation}>
        <ul className={Style.menu}>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/WallGodds"
              target="_blank"
              rel="noopener noreferrer"
              className={Style.github}
            >
              Github
            </a>
            <img
              className={Style.github_arrow}
              src={Github_arrow}
              alt="Github Redirect Arrow"
              data-github-arrow
            />
          </li>
        </ul>
      </div>
      <div className={Style.actions}>
        <div className={`${Style.search} ${searchOpen ? Style.open : ""}`}>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={Style.searchInput}
          />
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <img src={Search} alt="Search" data-search />
          </button>
        </div>
        
        {/* Updated Profile Button */}
        <div className={Style.profile}>
          <NavLink to="/profile" className={Style.profileLink}>
            <ProfileIcon />
          </NavLink>
        </div>

        <div className={Style.theme}>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;