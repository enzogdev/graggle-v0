import Slider from "./Slider";

export default function SliderController() {
  return (
    <div className="rounded-xl bg-white w-full bottom-0 p-5 drop-shadow-xl gap-5 flex flex-col justify-center">
      <Slider
        tag={"hue"}
        spectrum={{
          min: 0,
          max: 360,
          step: 1,
        }}
        value={0}
      />
      <Slider
        tag={"saturation"}
        spectrum={{
          min: 0,
          max: 100,
          step: 1,
        }}
        unit={"%"}
        value={0}
      />
      <Slider
        tag={"lightness"}
        spectrum={{
          min: 0,
          max: 100,
          step: 1,
        }}
        unit={"%"}
        value={0}
      />
      <Slider
        tag={"alpha"}
        spectrum={{
          min: 0,
          max: 1,
          step: 0.01,
        }}
        value={0}
      />
    </div>
  );
}
