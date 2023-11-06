import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import { ChangeEvent } from "react";
import {
  updateActiveColorElement,
  updatePin,
} from "../../../store/canvasSlice";

export default function SelectorHue() {
  const { activeColorElement } = useSelector(
    (state: RootState) => state.canvas
  );
  const dispatch = useDispatch();
  const hue = activeColorElement?.color.hue || 0;

  const handleHueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    if (activeColorElement) {
      const newColor = { ...activeColorElement.color, hue: newValue };
      dispatch(updatePin({ ...activeColorElement, color: newColor }));
      dispatch(
        updateActiveColorElement({ ...activeColorElement, color: newColor })
      );
    }
  };

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
      value={hue}
    />
  );
}
