/* eslint-disable @next/next/no-img-element */
interface IconProps {
  src: URL;
}
export const Icon = ({ src }: IconProps) => {
  return (
    <img
      alt="icon"
      style={{
        width: 20,
        height: 20,
      }}
      src={src.toString()}
    />
  );
};
