import MinusDesc from "./MinusDesc";
import MinusMain from "./MinusMain";
import MinusPerformance from "./MinusPerformance";
import MinusStory from "./MinusStory";
import MinusContact from "./MinusContact";

export default function Minus() {
  return (
    <>
      <MinusMain />
      <MinusDesc />
      <MinusPerformance />
      <MinusStory />
      <MinusContact />
      {/* <MinusBlog />
      <MinusTailwind /> */}
    </>
  );
}
