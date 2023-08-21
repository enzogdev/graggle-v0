import { ChangeEvent, useEffect, useState } from "react";

export default function Slider({ tag, spectrum }: Slider) {
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
        style={
          {
            //   backgroundImage: `linear-gradient(90deg, #FFFFFF) ${percentageBar}%, transparent ${percentageBar}%`,
          }
        }
        // onChange={handleInputChange}
      />
      <input
        type="number"
        className="font-mono text-2xl font-thin w-[56px] text-gray-700 bg-transparent outline-none border-b-2 border-[#d1d1d1]"
        min={spectrum.min}
        max={spectrum.max}
        // onChange={handleInputChange}
      />
    </div>
  );
}
