import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import { ChangeEvent, useEffect, useState } from "react";
import { updatePin } from "../../../store/canvasSlice";

export default function SelectorHue() {
  const { activeColorElement } = useSelector(
    (state: RootState) => state.canvas
  );
  const dispatch = useDispatch();
  const hue = activeColorElement?.color.hue;

  const [value, setValue] = useState(hue || 0);

  const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);

    if (!activeColorElement) return;

    const newColor = { ...activeColorElement.color, hue: newValue };
    dispatch(updatePin({ ...activeColorElement, color: newColor }));
  };

  useEffect(() => {
    setValue(hue || 0);
  }, [activeColorElement]);

  const backgroundHue = {
    background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",
  };

  return (
    <input
      className="w-full appearance-none h-3 rounded-xl picker"
      style={backgroundHue}
      type="range"
      min={0}
      max={360}
      step={1}
      onChange={handleHueChange}
      value={value}
    />
  );
}
