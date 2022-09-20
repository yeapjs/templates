import { createReactor } from "yeap/app";

export const Compter = ({ start = 0, step = 1 }) => {
  const compter = createReactor(start);

  return (
    <p>
      {compter}
      <br />
      <button class="btn" onClick={() => compter((n) => n + step)}>
        increment
      </button>
    </p>
  );
};
