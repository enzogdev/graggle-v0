import { useEffect, useState, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleCanvasAspectRatio = (aspectRatio: AspectRatio) => {
    dispatch(updateAspectRatio(aspectRatio));
  };

  const handleClickOutside = (event: { target: any }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="hidden space-x-10 md:flex" ref={menuRef}>
      <div className="relative">
        <ButtonTool
          onClick={toggleMenu}
          icon={<img src={aspectRatioIcon} alt="Change canvas aspect ratio" />}
        />

        {isOpen && (
          <div className="absolute left-0 bottom-16 z-full mt-3 w-[250px] max-w-md px-2 ">
            <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 ">
              <div className="relative grid gap-0 bg-white p-4 dark:bg-gray-600 bg-white">
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
      className="flex items-start rounded-lg p-2 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 transition-all"
    >
      <div className="ml-4">
        <p className="text-base font-medium dark:text-gray-100 text-left text-gray-800">
          {ratio}
        </p>
        <p className="mt-1 text-sm dark:text-gray-400 text-gray-400">
          {orientation}
        </p>
      </div>
    </button>
  );
}
