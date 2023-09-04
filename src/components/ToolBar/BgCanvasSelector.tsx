import { useState } from "react";
import ButtonTool from "./ButtonTool";
import bgColorIcon from "/icons/bucket-color.svg";

export function BgCanvasSelector() {
  const [bgCanvas, setBgCanvas] = useState("#FFFFFF");

  const handleClick = () => {
    document.getElementById("bgCanvasSelector")?.click();
  };

  const handleCanvasBgColor = (e: { target: { value: any } }) => {
    const newBgCanvasColor = e.target.value;
    setBgCanvas(newBgCanvasColor);

    const canvasElement = document.getElementById("canvas");
    if (canvasElement) {
      canvasElement.style.backgroundColor = newBgCanvasColor;
    }
  };

  return (
    <>
      <ButtonTool
        onClick={handleClick}
        icon={<img src={bgColorIcon} alt="Change canvas bg color" />}
      />
      <input
        type="color"
        name=""
        id="bgCanvasSelector"
        className="overflow-hidden w-0 h-0"
        value={bgCanvas}
        onChange={handleCanvasBgColor}
      />
    </>
  );
}
