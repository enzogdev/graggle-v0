import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Slider } from "../../types/types";
import { updatePin } from "../../store/canvasSlice";

export default function SliderComponent({ tag, spectrum }: Slider) {
  const activePin = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );
  const dispatch = useDispatch();

  const [value, setValue] = useState(activePin?.color[tag] || 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);

    const newPin = {
      ...activePin,
      color: {
        ...activePin?.color,
        [tag]: newValue,
      },
    };

    dispatch(updatePin(newPin));
  };

  useEffect(() => {
    setValue(activePin?.color[tag] || 0);
  }, [activePin, tag]);

  return (
    <div className="relative flex flex-row gap-2 items-center justify-end">
      <span className="text-gray-400 text-sm lg:text-lg font-thin unselectable w-[1em] overflow-hidden">
        {tag[0]}
      </span>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-gray-200 dark:bg-gray-800 w-full"
        type="range"
        step={spectrum.step}
        min={spectrum.min}
        max={spectrum.max}
        value={value || 0}
        onChange={handleInputChange}
      />
      <input
        type="number"
        className=" outline-0 font-mono dark:text-gray-400 text-sm lg:text-lg font-thin w-[5em] text-gray-700 bg-transparent outline-none border-b-2 border-[#d1d1d1] dark:border-slate-600"
        min={spectrum.min}
        max={spectrum.max}
        value={value || 0}
        onChange={handleInputChange}
      />
    </div>
  );
}
