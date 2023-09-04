import "./App.css";
import Header from "./components/Navigation/Header";
import Canvas from "./components/Canvas/Canvas";
import SliderController from "./components/ToolBar/SliderController";
import Footer from "./components/Navigation/Footer";
import PinList from "./components/ToolBar/PinList";
import Toolbar from "./components/ToolBar/ToolBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-9 w-full h-full overflow-auto py-6 px-0">
        <div className="flex flex-col gap-4 h-full z-10">
          <SliderController />
          <PinList />
          <Toolbar />
        </div>
        <div className="w-full h-full flex justify-center items-center overflow-hidden p-5">
          <Canvas />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
