import ButtonTool from "./ButtonTool";
import visibleIcon from "/icons/view.svg";
import hiddeIcon from "/icons/hide-3.svg";
import { useState } from "react";
import { toggleOpacityPins } from "./PaletteActions/togglePinsInCanvas";

export default function Toolbar() {
  const [isPinVisible, setIsPinVisible] = useState(true);

  const handleToggleVisible = () => {
    setIsPinVisible(isPinVisible ? false : true);
    toggleOpacityPins(isPinVisible);
  };

  return (
    <div className="flex flex-row items-end gap-4 self-end mt-5">
      <ButtonTool
        onClick={handleToggleVisible}
        icon={
          <img src={isPinVisible ? visibleIcon : hiddeIcon} alt="Toggle Pins" />
        }
      />
    </div>
  );
}
