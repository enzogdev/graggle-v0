import ButtonTool from "./ButtonTool";
import visibleIcon from "/icons/view.svg";
import hiddeIcon from "/icons/hide-3.svg";
import codeIcon from "/icons/code.svg";
import { useState } from "react";
import { toggleOpacityPins } from "./PaletteActions/togglePinsInCanvas";
import { RootState } from "../../types/types";
import { pinsToCss } from "../../utils/colorUtils";
import { useSelector } from "react-redux";

export default function Toolbar() {
  const [isPinVisible, setIsPinVisible] = useState(true);
  const { pins } = useSelector((state: RootState) => state.canvas);

  const handleToggleVisible = () => {
    setIsPinVisible(isPinVisible ? false : true);
    toggleOpacityPins(isPinVisible);
  };

  const handleCopyCodeToClipboard = () => {
    const code = pinsToCss(pins);
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Código copiado al portapapeles exitosamente");
      })
      .catch((error) => {
        console.error("No se pudo copiar el código: ", error);
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
    </div>
  );
}
