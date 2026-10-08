import MckaypableHeader from "../svg-playground/MckaypableHeader";
import GalleryWrapper from "./GalleryWrapper";

export default async function Home() {
  return (
    <div className="overflow-x-hidden h-full">
      <MckaypableHeader title="Web Projects Gallery" />
      <GalleryWrapper />
    </div>
  );
}
