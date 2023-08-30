import ButtonTool from "./ButtonTool";
import visibleIcon from "/icons/view.svg";
import hiddeIcon from "/icons/hide-3.svg";
import codeIcon from "/icons/code.svg";
import aspectRatioIcon from "/icons/aspect-ratio.svg";
import { useState } from "react";
import { toggleOpacityPins } from "./PaletteActions/togglePinsInCanvas";
import { RootState } from "../../types/types";
import { pinsToCss } from "../../utils/colorUtils";
import { useSelector } from "react-redux";
import { AspectRatioSelector } from "./PaletteActions/aspectRatioSelector";

export default function Toolbar() {
  const [isPinVisible, setIsPinVisible] = useState(true);
  const { pins } = useSelector((state: RootState) => state.canvas);

  const handleToggleVisible = () => {
    setIsPinVisible(isPinVisible ? false : true);
    toggleOpacityPins(!isPinVisible);
  };

  const handleCopyCodeToClipboard = () => {
    const code = pinsToCss(pins);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="flex flex-row items-end gap-4 self-end mt-5">
      <ButtonTool
        onClick={handleToggleVisible}
        icon={
          <img src={isPinVisible ? visibleIcon : hiddeIcon} alt="Toggle Pins" />
        }
      />
      <ButtonTool
        onClick={handleCopyCodeToClipboard}
        icon={<img src={codeIcon} alt="Copy code to clipboard" />}
      />
      <AspectRatioSelector />
    </div>
  );
}
