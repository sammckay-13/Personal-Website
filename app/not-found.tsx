import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-between h-full mt-5">
      <h1 className="text-3xl mb-5 text-[#fffbee]">404 Page Not Found</h1>
      <div className="bg-[#ce7052] h-2 w-full mb-50" />
      <h1 className="text-3xl text-[#fffbee]">How'd you wind up here?</h1>
      <p className="text-2xl text-[#fffbee] ">Here, let's get you back home</p>
      <Link
        className="flex border p-2 rounded-lg mt-5 text-xl text-[#fffbee] gap-2 border-[#fffbee]"
        href="/"
      >
        {" "}
        <FaHome className="mt-0.5" />
        Return Home
      </Link>
    </div>
  );
}
