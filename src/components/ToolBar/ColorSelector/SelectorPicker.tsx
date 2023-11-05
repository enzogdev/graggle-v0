import { useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import { useEffect, useState } from "react";

export default function SelectorPicker() {
  const hue = useSelector(
    (state: RootState) => state.canvas.activeColorElement?.color.hue
  );

  const [value, setValue] = useState(hue || 0);
  const backgroundPicking = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),hsl(${value}, 100%, 50%)`,
    minHeight: "150px",
  };
  const handleClick = (e) => {
    const x =
      (e.clientX - e.target.getBoundingClientRect().x) / e.target.clientWidth;
    const y =
      1 -
      (e.clientY - e.target.getBoundingClientRect().y) / e.target.clientHeight;

    const saturation = Math.round(x * 100);
    const lightness = Math.round((y - (x * y) / 2) * 100);
  };

  useEffect(() => {
    setValue(hue || 0);
  }, [hue]);
  return (
    <div
      id="picking_area"
      className="aspect-[16/9] w-full relative"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),hsl(${value}, 100%, 50%)`,
        minHeight: "150px",
      }}
      onClick={handleClick}
    ></div>
  );
}
