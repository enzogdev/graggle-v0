import { createPin } from "../../store/canvasSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/types";
import PinComponent from "./PinComponent";

export default function Canvas() {
  const dispatch = useDispatch();

  const { pins } = useSelector((state: RootState) => state.canvas);

  const onClickNewPin = () => {
    const newPin = {
      id: "",
      color: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
    };
    dispatch(createPin(newPin));
  };
  return (
    <div
      className="canvas w-full bg-white h-full relative rounded-xl drop-shadow-xl"
      onClick={() => onClickNewPin()}
    >
      {pins.map((pin) => (
        <PinComponent key={pin.id} {...pin} />
      ))}
    </div>
  );
}
