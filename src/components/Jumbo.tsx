import type { FC, PropsWithChildren } from "react";

const Jumbo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="jumbo">
      <div className="right tomster"></div>
      {children}
    </div>
  );
};

export default Jumbo;
