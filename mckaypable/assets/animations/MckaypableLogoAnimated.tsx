
export const MckaypableLogoAnimated = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 100% 100%" width="100%" height="100%" className="ml-0.75">
      <path
        d="M 7.8,39 L 39, 7.8 L 70.2,39"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 39,39 L 70.2, 7.8 L 101.4,39"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 7.8,39 L 101.4, 39"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 7, 39 L 39,70.2 L 70.2,39"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 39, 39 L 70.2,70.2 L 101.4,39"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
