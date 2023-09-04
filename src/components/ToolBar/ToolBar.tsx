import ButtonTool from "./ButtonTool";
import visibleIcon from "/icons/view.svg";
import hiddeIcon from "/icons/hide-3.svg";
import codeIcon from "/icons/code.svg";
import { useState } from "react";
import { RootState } from "../../types/types";
import { pinsToCss } from "../../utils/colorUtils";
import { useSelector } from "react-redux";
import { AspectRatioSelector } from "./AspectRatioSelector";
import { launchToast } from "./Toast";
import { BgCanvasSelector } from "./BgCanvasSelector";

export default function Toolbar() {
  const [isPinVisible, setIsPinVisible] = useState(true);
  const { pins } = useSelector((state: RootState) => state.canvas);
  const toggleOpacityPins = (isVisible: boolean) => {
    const pins = document.getElementsByClassName("pin");

    for (let i = 0; i < pins.length; i++) {
      const pin = pins[i] as HTMLElement;
      if (isVisible) {
        pin.style.opacity = "1";
      } else {
        pin.style.opacity = "0";
      }
    }
  };

  const handleToggleVisible = () => {
    setIsPinVisible(isPinVisible ? false : true);
    toggleOpacityPins(!isPinVisible);
  };

  const handleCopyCodeToClipboard = () => {
    const code = pinsToCss(pins);
    navigator.clipboard
      .writeText(code)
      .then(() => {
        launchToast("ok", "Texto copiado al portapapeles con éxito.", 3000);
      })
      .catch(() => {
        launchToast("fail", "Algo salió mal", 3000);
      });
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
      <BgCanvasSelector />
    </div>
  );
}
