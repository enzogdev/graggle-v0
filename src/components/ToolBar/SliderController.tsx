import { useSelector } from "react-redux";
import { RootState } from "../../types/types";
import SliderComponent from "./SliderComponent";

export default function SliderController() {
  const colorItem = useSelector(
    (state: RootState) => state.canvas.activeColorElement?.color
  );

  return (
    <div className="rounded-xl dark:bg-gray-700 bg-white w-[2/3] min-w-[250px] bottom-0 p-5 drop-shadow-xl gap-5 flex flex-col justify-center">
      <SliderComponent
        tag={"hue"}
        spectrum={{
          min: 0,
          max: 360,
          step: 1,
        }}
        value={colorItem?.hue || 0}
      />
      <SliderComponent
        tag={"saturation"}
        spectrum={{
          min: 0,
          max: 100,
          step: 1,
        }}
        unit={"%"}
        value={colorItem?.saturation || 0}
      />
      <SliderComponent
        tag={"lightness"}
        spectrum={{
          min: 0,
          max: 100,
          step: 1,
        }}
        unit={"%"}
        value={colorItem?.lightness || 0}
      />
      <SliderComponent
        tag={"alpha"}
        spectrum={{
          min: 0,
          max: 1,
          step: 0.01,
        }}
        value={colorItem?.alpha || 1}
      />
    </div>
  );
}
