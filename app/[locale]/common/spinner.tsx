import s from "./spinner.module.scss";

type Props = {
  size?: number;
  thickness?: number;
};

const Spinner = (props: Props) => {
  const { size, thickness } = props;

  return (
    <div
      className={s.spinner}
      style={{
        width: size,
        height: size,
        WebkitMask: `radial-gradient(farthest-side, #0000 calc(100% - ${thickness}px), #000 0)`,
      }}
    ></div>
  );
};

export default Spinner;
