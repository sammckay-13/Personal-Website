export const MckaypableLogoAnimated = ({ color }: { color: string }) => {
  return (
    <svg viewBox="0 0 100% 100%" width="100%" height="100%" className="ml-0.75">
      <path
        d="M 6.24,31.2 L 31.2, 6.24 L 56.16,31.2"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 31.2,31.2 L 56.16, 6.24 L 81.12,31.2"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 6.24,31.2 L 81.12, 31.2"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5.6, 31.2 L 31.2,56.16 L 56.16,31.2"
        fill="transparent"
        stroke={color ?? "#FFFBEE"}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M 31.2, 31.2 L 56.12,56.16 L 81.12,31.2"
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
