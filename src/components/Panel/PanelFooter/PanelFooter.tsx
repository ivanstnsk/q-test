import { FC } from "react";

import s from "./PanelFooter.module.scss";

type Props = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

const PanelFooter: FC<Props> = ({ id, className = "", children }) => {
  return (
    <footer id={id} className={`${s.PanelFooter} ${className}`}>
      {children}
    </footer>
  );
};

export default PanelFooter;
