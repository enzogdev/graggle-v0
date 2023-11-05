export default function SelectorAlpha() {
  const backgroundAlpha = {
    background: `url("src/assets/Alpha Mask.png"),#F00`,
    backgroundSize: "cover",
  };
  return (
    <input
      className="w-full appearance-none h-3 rounded-xl picker"
      style={backgroundAlpha}
      type="range"
      min={0}
      max={100}
      step={1}
    />
  );
}
