import { useSelector } from "react-redux";
import { useDraggablePin } from "../../hooks/useDraggablePin";
import { hslaToRgba } from "../../utils/hslaToRgba";
import { RootState } from "../../types/types";
import { isPin } from "../../utils/isPin";

export default function PinComponent() {
  const pin = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );

  const { handleDragStart, handleDrag, handleDragEnd, handleClick } =
    useDraggablePin(pin);
  if (!isPin(pin)) {
    return null; // Render nothing if 'pin' is not of type 'Pin'
  }

  const rgba = hslaToRgba(pin.color);

  const pinStyle = {
    top: pin.position.y + "%",
    left: pin.position.x + "%",
    translate: `-28% -20%`,
    backgroundColor: rgba,
    borderWidth: pin.id === pin.id ? "4px" : "2px", // Note the comparison
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
