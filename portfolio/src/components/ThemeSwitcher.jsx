import { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button
        onClick={toggleTheme}
        className="-m-2 rounded-md p-2 text-gray-700"
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill aria-hidden="true" className="size-6" />
        ) : (
          <BsSunFill aria-hidden="true" className="size-6 text-yellow-100" />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
