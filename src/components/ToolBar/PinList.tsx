import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/types";
import { hslaToRgba } from "../../utils/colorUtils";
import { updatePinOrder } from "../../store/canvasSlice";
import { DragEvent } from "react";

export default function PinList() {
  const dispatch = useDispatch();
  const { pins } = useSelector((state: RootState) => state.canvas);

  const handleDragStart = (e: DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLLIElement>, targetIndex: number) => {
    e.preventDefault();

    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"));

    // Move the item from sourceIndex to targetIndex
    const reorderedPins = [...pins];
    const [draggedItem] = reorderedPins.splice(sourceIndex, 1);
    reorderedPins.splice(targetIndex, 0, draggedItem);

    // Update the pin order in the Redux state
    dispatch(updatePinOrder(reorderedPins));
  };
  return (
    <ul className="rounded-xl bg-white w-full p-5 drop-shadow-xl gap-5 flex flex-col overflow-y-scroll grow dark:bg-gray-700">
      {pins.map((pin, index) => (
        <li
          key={pin.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="flex radius-xl hover:drop-shadow-md"
        >
          <div className="flex flex-row items-center gap-0 w-full">
            <div
              className="w-10 h-10 rounded-l-lg"
              style={{ backgroundColor: hslaToRgba(pin.color) }}
            ></div>
            <div className="p-2 text-xs h-full w-full flex items-center rounded-r-lg bg-slate-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-slate-100 ">
              {hslaToRgba(pin.color)}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
