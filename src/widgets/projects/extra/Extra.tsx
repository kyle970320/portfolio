import ExtraChat from "./ExtraChat";
import ExtraFactory from "./ExtraFactory";
import ExtraInterior from "./ExtraInterior";
import ExtraMain from "./ExtraMain";
import ExtraNews from "./ExtraNews";

export default function Extra() {
  return (
    <>
      <ExtraMain />
      <ExtraFactory />
      <ExtraInterior />
      <ExtraNews />
      <ExtraChat />
    </>
  );
}
