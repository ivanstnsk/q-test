import { FC } from "react";

import COMMANDS from "@/data/commands.json";

import s from "./Footer.module.scss";

type Props = {
  id?: string;
  className?: string;
};

const renderCommand = ([key, name]: [string, string]) => {
  return (
    <div key={key} className={s.Command}>
      {key}
      <div className={s.Name}>{name}</div>
    </div>
  );
};

const Footer: FC<Props> = ({ id, className = "" }) => {
  return (
    <footer id={id} className={`${s.Footer} ${className}`}>
      {Object.entries(COMMANDS).map(renderCommand)}
    </footer>
  );
};

export default Footer;
