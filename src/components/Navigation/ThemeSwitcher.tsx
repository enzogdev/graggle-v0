import { useState } from "react";
import useDarkTheme from "../../hooks/useDarkTheme";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkTheme, setDarkTheme] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };

  return (
    <>
      <div>
        <input type="checkbox" checked={darkTheme} onChange={toggleDarkMode} />
      </div>
    </>
  );
}
