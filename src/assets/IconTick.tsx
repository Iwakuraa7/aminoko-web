type Props = {
  className?: string;
};

export function IconTick({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M11,16.414l-4.707-4.707l1.414-1.414L11,13.586l9.675-9.675C20.318,3.364,19.702,3,19,3H5C3.895,3,3,3.895,3,5v14 c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V6.414L11,16.414z" />
    </svg>
  );
}
