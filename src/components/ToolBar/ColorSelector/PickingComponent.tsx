export default function PickingComponent() {
  const backgroundPicking = {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),#F00",
    minHeight: "150px",
  };
  const backgroundHue = {
    background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",
  };
  const backgroundAlpha = {
    background: `url("src/assets/Alpha Mask.png"),#F00`,
    backgroundSize: "cover",
  };
  const handleClick = (e) => {
    const x =
      (e.clientX - e.target.getBoundingClientRect().x) / e.target.clientWidth;
    const y =
      (e.clientY - e.target.getBoundingClientRect().y) / e.target.clientHeight;

    const saturation = x;
    const lightness = y + x / 2;

    const xRounded = Math.round(x * 100);
    const yRounded = Math.round(y * 100);
    const saturationRounded = Math.round(saturation * 100);
    const lightnessRounded = Math.round(lightness * 100) + 100;

    console.table([
      ["x", xRounded],
      ["y", yRounded],
      ["s", saturationRounded],
      ["l", lightnessRounded],
    ]);
  };
  return (
    <>
      <div
        id="picking_area"
        className="aspect-[16/9] w-full relative"
        style={backgroundPicking}
        onClick={handleClick}
      ></div>
      <div className="flex flex-row gap-4">
        <div
          className="aspect-square h-full rounded-full"
          style={{ background: "#F00" }}
        ></div>

        <div className="flex flex-col gap-4 w-full">
          <input
            className="w-full appearance-none h-3 rounded-xl picker"
            style={backgroundHue}
            type="range"
            min={0}
            max={360}
            step={1}
          />
          <input
            className="w-full appearance-none h-3 rounded-xl picker"
            style={backgroundAlpha}
            type="range"
            min={0}
            max={100}
            step={0.1}
          />
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
