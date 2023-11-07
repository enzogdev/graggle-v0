import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/types";
import { useEffect, useState, useRef } from "react";
import { updatePin } from "../../../store/canvasSlice";

export default function SelectorPicker() {
  const activePin = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    value: activePin?.color.hue || 0,
    cursorPosition: { top: 0, left: 0 },
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const handleDrag = (e: { clientX: number; clientY: number }) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(1, (e.clientX - containerRect.left) / containerRect.width)
    );
    const y = Math.max(
      0,
      Math.min(1, 1 - (e.clientY - containerRect.top) / containerRect.height)
    );

    const newLeft = Math.max(0, Math.min(100, x * 100));
    const newTop = Math.max(0, Math.min(100, y * 100));

    setState((prevState) => ({
      ...prevState,
      cursorPosition: { top: newTop, left: newLeft },
    }));

    if (activePin) {
      const saturation = Math.round(x * 100);
      const lightness = Math.round((y - (x * y) / 2) * 100);

      const newPin = {
        ...activePin,
        color: { ...activePin.color, saturation, lightness },
      };

      dispatch(updatePin(newPin));
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      value: activePin?.color.hue || 0,
    }));
  }, [activePin]);

  return (
    <div
      ref={containerRef}
      id="picking_area"
      className="aspect-[16/9] w-full relative"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),hsl(${state.value}, 100%, 50%)`,
        minHeight: "150px",
      }}
    >
      <div
        className="cursor"
        draggable
        style={{
          position: "absolute",
          bottom: `calc(${state.cursorPosition.top}% - 10px)`,
          left: `calc(${state.cursorPosition.left}% - 10px)`,
        }}
        onMouseDown={handleDragStart}
      ></div>
    </div>
  );
}
