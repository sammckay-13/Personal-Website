export const MckaypableLogoAnimated = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 90 90" width="100%" height="100%" className="mr-3 mt-0.5">
      <path
        d="M 5,25 L 25, 5 L 45,25"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 25,25 L 45, 5 L 65,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5,25 L 65,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5, 25 L 25,45 L 45,25"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 25, 25 L 45,45.2 L 65,25"
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
