import "./App.css";
import Header from "./components/Navigation/Header";
import Canvas from "./components/Canvas/Canvas";
import Toolbar from "./components/ToolBar/ToolBar";
import SliderController from "./components/ToolBar/SliderController";
import CodeBlock from "./components/ToolBar/CodeBlock";
import Footer from "./components/Navigation/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-9 self-stretch h-full">
        <Canvas />
        <div className="flex flex-col justify-center gap-9 self-stretch w-full">
          <Toolbar />
        </div>
        <div className="flex flex-row items-center gap-9 self-stretch w-full">
          <SliderController />
          <CodeBlock />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
