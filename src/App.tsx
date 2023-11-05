import "./App.css";
import Header from "./components/Navigation/Header";
import Canvas from "./components/Canvas/Canvas";
// import SliderController from "./components/ToolBar/SliderController";
import Footer from "./components/Navigation/Footer";
import PinList from "./components/ToolBar/PinList";
import Toolbar from "./components/ToolBar/ToolBar";
import PickingComponent from "./components/ToolBar/ColorSelector/PickingComponent";

function App() {
  return (
    <>
      <div className="flex flex-row gap-4 w-full h-full overflow-auto p-0">
        <div className="flex flex-col gap-4 h-full z-10">
          {/* <SliderController /> */}
          <Header />
          <PickingComponent />
          <PinList />
          <Toolbar />
          <Footer />
        </div>
        <div className="w-full h-full flex justify-center items-center overflow-hidden p-0">
          <Canvas />
        </div>
      </div>
    </>
  );
}

export default App;
