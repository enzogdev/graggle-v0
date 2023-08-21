import ButtonTool from "./ButtonTool";

export default function Toolbar() {
  const actions = [
    {
      icon: "format-color-fill",
      text: "canvas background",
      background: "",
    },
    {
      icon: "fullscreen",
      text: "full screen",
      background: "",
    },
    {
      icon: "copy",
      text: "copy code",
      background: "",
    },
    {
      icon: "save",
      text: "save",
      background: "",
    },
  ];
  return (
    <div className="flex flex-row items-center gap-5 self-stretch">
      {actions.map((action) => (
        <ButtonTool key={action.text} {...action} />
      ))}
    </div>
  );
}
