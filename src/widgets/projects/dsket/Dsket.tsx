// import DsketConnect from "./DsketConnect";
import DsketSingletonRendering from "./DsketSingletonRendering";
import DsketDesc from "./DsketDesc";
import DsketLibrary from "./DsketLibrary";
import DsketMain from "./DsketMain";
import DsketSEO from "./DsketSEO";

export default function Dsket() {
  return (
    <>
      <DsketMain />
      <DsketDesc />
      <DsketLibrary />
      <DsketSingletonRendering />
      <DsketSEO />
      {/* <DsketConnect /> */}
    </>
  );
}
