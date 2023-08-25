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
    <div className="flex flex-row items-end gap-4 self-end mt-5">
      {actions.map((action) => (
        <ButtonTool key={action.text} {...action} />
      ))}
    </div>
  );
}
