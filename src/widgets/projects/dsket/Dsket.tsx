// import DsketConnect from "./DsketConnect";
import DsketSingletonRendering from "./DsketSingletonRendering";
import DsketDesc from "./DsketDesc";
import DsketLibrary from "./DsketLibrary";
import DsketMain from "./DsketMain";
// import DsketCache from "./DsketCache";
import DsketConnect from "./DsketConnect";

export default function Dsket() {
  return (
    <>
      <DsketMain />
      <DsketDesc />
      <DsketLibrary />
      <DsketSingletonRendering />
      {/* <DsketCache /> */}
      <DsketConnect />
    </>
  );
}
