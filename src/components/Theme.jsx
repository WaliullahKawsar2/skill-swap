
import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <label className="inline-flex text-base-content cursor-pointer  items-center ">
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={theme === "dark"}
        className="toggle"
        value={theme}
      />

      
    </label>
  );
};

export default Theme;
