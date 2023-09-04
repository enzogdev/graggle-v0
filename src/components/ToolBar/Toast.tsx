import check from "/icons/check.svg";
import fail from "/icons/check.svg";
import { createRoot } from "react-dom/client";
export default function Toast({
  message,
  status,
}: {
  message: string;
  status: "ok" | "fail";
  time: number;
}) {
  const classes =
    "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 rounded-lg dark:text-blue-200 p-1 " +
    (status === "ok" ? "bg-green-800" : "bg-red-800");
  return (
    <div
      className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 "
      role="alert"
    >
      <div className={classes}>
        <img src={status === "ok" ? check : fail} />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      {/* <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-collapse-toggle="toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <img src={closeIcon} />
      </button> */}
    </div>
  );
}

export function launchToast(
  status: "ok" | "fail",
  message: string,
  time: number
) {
  const toastElement = document.createElement("div");
  const root = createRoot(toastElement);

  root.render(
    <div className="absolute top-0 left-[50%] mt-8">
      <Toast status={status} message={message} time={time} />
    </div>
  );

  document.body.appendChild(toastElement);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(toastElement);
  }, time);
}
