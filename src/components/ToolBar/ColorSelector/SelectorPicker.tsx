import { useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import { useEffect, useState } from "react";

export default function SelectorPicker() {
  const item = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );

  const [value, setValue] = useState(item?.color.hue || 0);
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
    setValue(item?.color.hue || 0);
  }, [item]);
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
