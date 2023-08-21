import Image from "next/image";

export default function ButtonTool(action: {
  icon: string;
  text: string | undefined;
}) {
  return (
    <button
      className="w-14 h-14 bg-slate-100 rounded-lg drop-shadow-lg flex justify-center items-center hover:drop-shadow-xl hover:-translate-y-2 transition-all"
      //   onClick={handleClick}
    >
      {/* <Image src={`./${action.icon}.svg`} alt={""} /> */}
    </button>
  );
}
