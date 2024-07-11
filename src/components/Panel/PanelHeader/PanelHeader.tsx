import { FC } from "react";

import s from "./PanelHeader.module.scss";

type Props = {
  id?: string;
  className?: string;
  children?: string;
  focused?: boolean;
};

const PanelHeader: FC<Props> = ({ id, className = "", children, focused }) => {
  return (
    <header id={id} className={`${s.PanelHeader} ${className}`}>
      <h1 className={`${s.H1} ${focused ? s.Focused : ""}`}>{children}</h1>
    </header>
  );
};

export default PanelHeader;
