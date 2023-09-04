import { AspectRatio } from "../../types/types";

export default function RadioOption({
  ratio,
  orientation,
  onClick,
}: AspectRatio & { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-start rounded-lg p-2 hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 transition-all"
    >
      <div className="ml-4">
        <p className="text-base font-medium dark:text-gray-100 text-left text-gray-800">
          {ratio}
        </p>
        <p className="mt-1 text-sm dark:text-gray-400 text-gray-400">
          {orientation}
        </p>
      </div>
    </button>
  );
}
