import DsketConnect from "./DsketConnect";
import DsketDesc from "./DsketDesc";
import DsketLibrary from "./DsketLibrary";
import DsketMain from "./DsketMain";
import DsketSEO from "./DsketSEO";

export default function Dsket() {
  return (
    <>
      <DsketMain />
      <DsketDesc />
      {/* <DsketConnectNotion /> */}
      <DsketSEO />
      <DsketLibrary />
      <DsketConnect />
    </>
  );
}
