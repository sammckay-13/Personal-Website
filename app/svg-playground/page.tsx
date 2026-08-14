import MckaypableHeader from "./MckaypableHeader";
import PlaygroundWrapper from "./PlaygroundWrapper";

export default async function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <MckaypableHeader />
      <PlaygroundWrapper />
    </div>
  );
}
