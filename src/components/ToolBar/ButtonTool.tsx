export default function ButtonTool({ onClick, icon }) {
  return (
    <button
      className="w-14 h-14 bg-white rounded-lg drop-shadow-lg flex justify-center items-center hover:drop-shadow-xl hover:-translate-y-2 transition-all"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
