import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import {
  updateActiveColorElement,
  updatePin,
} from "../../../store/canvasSlice";
import { ChangeEvent } from "react";

export default function SelectorAlpha() {
  const { activeColorElement } = useSelector(
    (state: RootState) => state.canvas
  );
  const dispatch = useDispatch();
  const alpha = activeColorElement?.color.alpha || 0;

  const handleAlphaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    if (activeColorElement) {
      const newColor = { ...activeColorElement.color, alpha: newValue };
      dispatch(updatePin({ ...activeColorElement, color: newColor }));
      dispatch(
        updateActiveColorElement({ ...activeColorElement, color: newColor })
      );
    }
  };
  const backgroundAlpha = {
    background: `url("src/assets/Alpha Mask.png"),#F00`,
    backgroundSize: "cover",
  };
  return (
    <input
      className="w-full appearance-none h-3 rounded-xl picker"
      style={backgroundAlpha}
      type="range"
      min={0}
      max={1}
      step={0.01}
      onChange={handleAlphaChange}
      value={alpha}
    />
  );
}
