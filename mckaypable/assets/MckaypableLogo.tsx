export const MckaypableLogo = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 100% 100%" width="100%" height="100%" className="ml-0.75">
      <path
        d="M 3.9,19.5 L 19.5, 3.9 L 35.1,19.5"
        fill="transparent"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 19.5,19.5 L 35.1, 3.9 L 50.7,19.5"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 3.9,19.5 L 50.7, 19.5"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 3.5, 19.5 L 19.5,35.1 L 35.1,19.5"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 19.5, 19.5 L 35.1,35.1 L 50.7,19.5"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
