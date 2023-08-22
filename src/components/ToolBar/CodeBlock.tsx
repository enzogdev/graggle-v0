import { useSelector } from "react-redux";
import { pinsToCss } from "../../utils/colorUtils";
import { RootState } from "../../types/types";

export default function CodeBlock() {
  const { pins } = useSelector((state: RootState) => state.canvas);
  const backgroundColor = pinsToCss(pins);
  return (
    <div className=" overflow-y-scroll rounded-xl bg-white w-full bottom-0 p-5 drop-shadow-xl gap-5 flex flex-col h-72">
      {backgroundColor}
    </div>
  );
}
