import HanwhaContact from "./HanwhaContact";
import HanwhaDesc from "./HanwhaDesc";
import HanwhaMain from "./HanwhaMain";
import HanwhaLanguage from "./HanwhaLanguage";
import HanwhaDashboard from "./HanwhaDashboard";

export default function Hanwha() {
  return (
    <>
      <HanwhaMain />
      <HanwhaDesc />
      <HanwhaDashboard />
      <HanwhaLanguage />
      <HanwhaContact />
    </>
  );
}
