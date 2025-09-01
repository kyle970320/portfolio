import Header from "./layout/Header";
import Squares from "./layout/Squares";
import GlutterBlob from "./sections/GlutterCanvas";
import IntroSection from "./sections/IntroSection";

function App() {
  return (
    <>
      <div className="fixed w-[100vw] h-[100vh] bg-black">
        <Squares
          speed={0.4}
          squareSize={35}
          direction="left" // up, down, left, right, diagonal
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(0,0,0,0)"
        />
      </div>
      <div className="relative m-auto w-full h-[100vh]">
        <Header />
        <GlutterBlob />
        <div className="max-w-220 mx-auto">
          <IntroSection />
        </div>
      </div>
    </>
  );
}

export default App;
