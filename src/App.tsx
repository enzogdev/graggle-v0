import "./App.css";
import Header from "./components/Navigation/Header";
import Canvas from "./components/Canvas/Canvas";
import SliderController from "./components/ToolBar/SliderController";
// import CodeBlock from "./components/ToolBar/CodeBlock";
import Footer from "./components/Navigation/Footer";
import PinList from "./components/ToolBar/PinList";
import Toolbar from "./components/ToolBar/ToolBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-9 w-full h-full overflow-auto">
        <div className="flex flex-col gap-4 h-full">
          <SliderController />
          <PinList />
          <Toolbar />
        </div>
        <Canvas />
      </div>
      {/* <div className="flex flex-row items-center gap-9 self-stretch w-full">
        <CodeBlock />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
