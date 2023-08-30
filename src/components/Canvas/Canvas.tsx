import {
  createPin,
  updateActiveColorElement,
  updateAspectRatio,
} from "../../store/canvasSlice";
import { useSelector, useDispatch } from "react-redux";
import { Pin, RootState } from "../../types/types";
import PinComponent from "./PinComponent";
import { v4 as uuid } from "uuid";
import { pinsToCss } from "../../utils/colorUtils";

export default function Canvas() {
  const dispatch = useDispatch();
  const { pins } = useSelector((state: RootState) => state.canvas);
  const { aspectRatio } = useSelector((state: RootState) => state.canvas);
  const backgroundColor = pinsToCss(pins);

  const onClickNewPin = (e) => {
    if (e.target != document.getElementById("canvas")) return;

    const canvasSize = {
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    };
    const position = {
      x: Math.floor((e.nativeEvent.offsetX / canvasSize.width) * 100),
      y: Math.floor((e.nativeEvent.offsetY / canvasSize.height) * 100),
    };

    const newPin: Pin = {
      id: uuid(),
      color: {
        hue: Math.floor(Math.random() * 361),
        saturation: 100,
        lightness: 50,
        alpha: 1,
      },
      position: {
        x: position.x,
        y: position.y,
      },
    };
    dispatch(createPin(newPin));
    dispatch(updateActiveColorElement(newPin));
  };

  const canvasClasses =
    "canvas bg-white relative rounded-xl drop-shadow-xl dark:bg-gray-700 transition-all " +
    aspectRatio.tailwindClass;

  return (
    <div
      id="canvas"
      className={canvasClasses}
      style={{ backgroundImage: backgroundColor }}
      onClick={(e) => onClickNewPin(e)}
    >
      {pins.map((pin) => (
        <PinComponent key={pin.id} {...pin} />
      ))}
    </div>
  );
}
