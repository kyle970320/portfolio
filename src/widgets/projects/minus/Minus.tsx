import MinusBlog from "./MinusBlog";
import MinusDesc from "./MinusDesc";
import MinusMain from "./MinusMain";
import MinusMonorepo from "./MinusMonorepo";
import MinusPerformance from "./MinusPerformance";
import MinusStory from "./MinusStory";

export default function Minus() {
  return (
    <>
      <MinusMain />
      <MinusDesc />
      <MinusPerformance />
      <MinusMonorepo />
      <MinusStory />
      <MinusBlog />
    </>
  );
}
