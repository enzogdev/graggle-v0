import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAspectRatio } from "../../store/canvasSlice";
import { AspectRatio } from "../../types/types";
import { aspectRatioArray } from "../../utils/aspectRatioData";
import ButtonTool from "./ButtonTool";
import aspectRatioIcon from "/icons/aspect-ratio.svg";
import RadioOption from "./RatioOption";

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
    <nav className="space-x-10 md:flex" ref={menuRef}>
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
                  <RadioOption
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
