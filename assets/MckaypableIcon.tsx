export const MckaypableIcon = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 100% 100%" width="100%" height="100%" className="ml-1">
      <path
        d="M 1.95,9.75 L 9.75, 1.95 L 17.55,9.75"
        fill="transparent"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 9.75,9.75 L 17.55, 1.95 L 25.35,9.75"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 1.95,9.75 L 25.35, 9.75"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 1.95, 9.75 L 9.75,17.55 L 17.55,9.75"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 9.75, 9.75 L 17.55,17.55 L 25.35,9.75"
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
