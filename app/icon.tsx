import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/svg+xml";

export default function Icon() {
  return new ImageResponse(
    <svg viewBox="0 -5 51 51" width="100%" height="120%">
      <path
        d="M 3.9,19.5 L 19.5, 3.9 L 35.1,19.5"
        fill="transparent"
        stroke={"#DC9954"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 19.5,19.5 L 35.1, 3.9 L 50.7,19.5"
        fill="transparent"
        stroke={"#DC9954"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 3.9,19.5 L 50.7, 19.5"
        fill="transparent"
        stroke={"#DC9954"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 3.5, 19.5 L 19.5,35.1 L 35.1,19.5"
        fill="transparent"
        stroke={"#DC9954"}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 19.5, 19.5 L 35.1,35.1 L 50.7,19.5"
        fill="transparent"
        stroke={"#DC9954"}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
    </svg>,
    { ...size },
  );
}
