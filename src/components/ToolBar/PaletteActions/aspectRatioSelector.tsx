import { SetStateAction, useState } from "react";
import { aspectRatioArray } from "../../../utils/aspectRatioData";
import { AspectRatio } from "../../../types/types";
import aspectRatioIcon from "/icons/aspect-ratio.svg";
import ButtonTool from "../ButtonTool";
import { useDispatch } from "react-redux";
import { updateAspectRatio } from "../../../store/canvasSlice";

export function AspectRatioSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const handleCanvasAspectRatio = (aspectRatio: AspectRatio) => {
    dispatch(updateAspectRatio(aspectRatio));
  };
  return (
    <nav className="hidden space-x-10 md:flex">
      <div className="relative">
        <ButtonTool
          onClick={toggleMenu}
          icon={<img src={aspectRatioIcon} alt="Change canvas aspect ratio" />}
        />

        {isOpen && (
          <div className="absolute left-0 bottom-16 z-full mt-3 w-[250px] max-w-md px-2 sm:px-0">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-0 bg-white p-4">
                {aspectRatioArray.map((aspectRatio) => (
                  <Option
                    {...aspectRatio}
                    key={aspectRatio.ratio}
                    onClick={() => handleCanvasAspectRatio(aspectRatio)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function Option({
  ratio,
  orientation,
  onClick,
}: AspectRatio & { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-start rounded-lg p-2 hover:bg-gray-50"
    >
      <div className="ml-4">
        <p className="text-base font-medium text-gray-900 text-left">{ratio}</p>
        <p className="mt-1 text-sm text-gray-500">{orientation}</p>
      </div>
    </button>
  );
}
