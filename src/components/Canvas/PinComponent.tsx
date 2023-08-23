import { useSelector, useDispatch } from "react-redux";
import { useDraggablePin } from "../../hooks/useDraggablePin";
import { hslaToRgba } from "../../utils/colorUtils";
import { Pin, RootState } from "../../types/types";
export default function PinComponent(pin: Pin) {
  const { handleDragStart, handleDrag, handleDragEnd, handleClick } =
    useDraggablePin(pin);

  const activePin = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );

  const pinStyle = {
    top: pin.position.y + "%",
    left: pin.position.x + "%",
    translate: `-28% -20%`,
    backgroundColor: hslaToRgba(pin.color),
    borderWidth: activePin?.id === pin.id ? "4px" : "2px",
  };

  return (
    <button
      key={pin.id}
      draggable
      className="h-5 w-5 absolute border-solid border-2 border-slate-100 rounded-full shadow-inner hover:scale-125 transition-transform"
      style={pinStyle}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
    ></button>
  );
}
