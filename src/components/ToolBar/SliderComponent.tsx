import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Slider } from "../../types/types";
import { updatePin } from "../../store/canvasSlice";

export default function SliderComponent({ tag, spectrum }: Slider) {
  const activePin = useSelector(
    (state: RootState) => state.canvas.activeColorElement
  );
  const dispatch = useDispatch();

  // Si activePin es nulo, el componente no renderizará nada
  const [value, setValue] = useState(activePin?.color[tag] || 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    // Crear una copia actualizada del objeto activePin
    const newColorElement = {
      ...activePin,
      color: {
        ...activePin?.color,
        [tag]: newValue,
      },
    };

    dispatch(updatePin(newColorElement));
  };

  useEffect(() => {
    setValue(activePin?.color[tag] || 0);
  }, [activePin, tag]);

  return (
    <div className="relative flex gap-5 items-center justify-end">
      <span className="text-gray-400 text-2xl font-thin unselectable">
        {tag[0]}
      </span>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-gray-200 w-full"
        type="range"
        step={spectrum.step}
        min={spectrum.min}
        max={spectrum.max}
        value={value || 0}
        onChange={handleInputChange}
      />
      <input
        type="number"
        className="font-mono text-2xl font-thin w-[56px] text-gray-700 bg-transparent outline-none border-b-2 border-[#d1d1d1]"
        min={spectrum.min}
        max={spectrum.max}
        value={value || 0}
        onChange={handleInputChange}
      />
    </div>
  );
}
