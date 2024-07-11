import { FC } from "react";

import s from "./PanelBody.module.scss";

type Props = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

const PanelBody: FC<Props> = ({ id, className = "", children }) => {
  return (
    <div id={id} className={`${s.PanelBody} ${className}`}>
      {children}
    </div>
  );
};

export default PanelBody;
