import { FC } from "react";

import s from "./Panel.module.scss";
import PanelHeader from "./PanelHeader";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";

type Props = {
  id?: string;
  className?: string;
  title: string;
  bottom: string;
  children?: React.ReactNode;
  focused?: boolean;
};

const Panel: FC<Props> = ({
  id,
  className = "",
  title,
  bottom,
  children,
  focused,
}) => {
  return (
    <section id={id} className={`${s.Panel} ${className}`}>
      <PanelHeader focused={focused}>{title}</PanelHeader>
      <PanelBody>{children}</PanelBody>
      <PanelFooter>{bottom}</PanelFooter>
    </section>
  );
};

export default Panel;
