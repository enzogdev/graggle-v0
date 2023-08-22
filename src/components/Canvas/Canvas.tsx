import { createPin } from "../../store/canvasSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/types";
import PinComponent from "./PinComponent";
import { v4 as uuid } from "uuid"

export default function Canvas() {
  const dispatch = useDispatch();
  const { pins } = useSelector((state: RootState) => state.canvas);

  const onClickNewPin = (e) => {

    const canvasSize = {
      height: e.target.offsetHeight,
      width: e.target.offsetWidth
    }
    console.log({
      height: (e.target.offsetHeight - e.nativeEvent.offsetY) / 100,
      width: (e.target.offsetWidth - e.nativeEvent.offsetX) / 100,
    })
    console.log(e)

    const newPin = {
      id: uuid(),
      color: {
        hue: Math.floor(Math.random() * 361),
        saturation: 100,
        lightness: 500,
        alpha: 1,
      },
      position: {
        x: e.target.offsetX,
        y: e.target.offsetY,
      },
    };
    dispatch(createPin(newPin));
  };
  return (
    <div
      className="canvas w-full bg-white h-full relative rounded-xl drop-shadow-xl"
      onClick={(e) => onClickNewPin(e)}
    >
      {pins.map((pin) => (
        <PinComponent key={pin.id} {...pin} />
      ))}
    </div>
  );
}
