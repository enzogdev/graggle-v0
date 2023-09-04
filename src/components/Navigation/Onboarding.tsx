import { createRoot } from "react-dom/client";

export function Onboarding() {
  const handleCloseOnboarding = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const elementoEliminar = document.getElementById("onboarding");

    if (elementoEliminar && elementoEliminar.parentNode) {
      elementoEliminar.parentNode.removeChild(elementoEliminar);
    }
  };

  return (
    <div
      id="onboarding"
      className="w-full p-8 text-gray-500 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800 "
    >
      <section className="text-center">
        <h1 className="text-4xl font-medium mb-4">
          Welcome to <span className="font-bold">graggle</span>
        </h1>
        <h2 className="text-2xl mb-8">
          Use an ui to create colorfull css gradients backgrounds
        </h2>
        <button
          onClick={handleCloseOnboarding}
          className="rounded-lg bg-pink-500 py-3 px-6 font-sans font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Start creating
        </button>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-medium">1 - Click on canvas</h3>
        <p>
          You can also move the pins around the canvas to adjust them to the
          position you prefer.
        </p>
        <p>
          And change the order of the pins by dragging and dropping to highlight
          the ones that interest you the most.
        </p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-medium">2 - Custom your color</h3>
        <p>
          Select your pin and use this control hsla based to adjust the color
        </p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-medium">3 - Export the result!</h3>
        <p>Copy the result in your clipboard and apply it when you want</p>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-medium">Change the preview</h3>
        <p>
          You can toggle pins, change canvas aspect ratio and background color
        </p>
      </section>
    </div>
  );
}

export function launchOnboarding() {
  const onboardingElement = document.createElement("div");
  const root = createRoot(onboardingElement);

  root.render(
    <div className="absolute top-0 left-0 w-2/3 right-0 mt-8 z-10 m-auto drop-shadow-xl">
      <Onboarding />
    </div>
  );

  document.body.appendChild(onboardingElement);
}
