import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { themeChange } from "theme-change";

function Navbar({ title }) {
  const themeValues = [
    "dark",
    "light",
    "cupcake",
    "halloween",
    "aqua",
    "synthwave",
    "cyberpunk",
    "retro",
    "forest",
    "pastel",
    "black",
    "luxury",
    "night",
    "dracula",
  ];

  useEffect(() => {
    themeChange(false);
  });

  return (
    <nav className="mb-12 navbar shadow-lg bg-neutral text-neutral-content">
      <div className="mx-auto container">
        <div className="flex-non px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 py-2">
          <div className="flex justify-end">
            {/* <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link> */}
            <select
              className="select select-ghost select-sm ml-4 bg-base-200 rounded-md"
              data-choose-theme
            >
              <option disabled value="">
                Theme
              </option>
              {themeValues.map((theme, index) => (
                <option
                  key={index}
                  value={theme}
                  defaultValue={theme === "dark" ? true : false}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.protoTypes = {
  title: PropTypes.string,
};

export default Navbar;
