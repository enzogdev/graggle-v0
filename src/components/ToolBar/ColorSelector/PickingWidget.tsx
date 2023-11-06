import { useSelector } from "react-redux";
import SelectorAlpha from "./SelectorAlpha";
import SelectorHue from "./SelectorHue";
import SelectorPicker from "./SelectorPicker";
import { RootState } from "../../../types/types";

export default function PickingWidget() {
  const colorItem = useSelector(
    (state: RootState) => state.canvas.activeColorElement?.color
  );
  return (
    <>
      <SelectorPicker />
      <div className="flex flex-row gap-4">
        <div
          className="aspect-square h-full rounded-full"
          style={{ background: "#F00" }}
        ></div>

        <div className="flex flex-col gap-4 w-full">
          <SelectorHue />
          <SelectorAlpha />
        </div>
      </div>
      <div className="flex gap-2 flex-row">
        <select className="p-1" name="" id="">
          <option value="HEX">HEX</option>
          <option value="RGB">RGB</option>
          <option value="HSL">HSL</option>
        </select>
        <div className="flex flex-row">
          <input
            className="p-1 w-full border"
            type="text"
            name=""
            id=""
            value={"FF0000"}
          />
          <input
            className="w-full p-1"
            type="number"
            name=""
            id=""
            value={"100"}
          />
        </div>
      </div>
    </>
  );
}
