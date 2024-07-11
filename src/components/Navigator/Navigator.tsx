import { FC } from "react";

import s from "./Navigator.module.scss";
import File from "./File";

type Props = {
  id?: string;
  className?: string;
};

const Navigator: FC<Props> = ({ id, className = "" }) => {
  return (
    <section id={id} className={`${s.Navigator} ${className}`}>
      <section className={s.Col}>
        <header className={s.Header}>Name</header>
        <ul className={s.Files}>
          <li className={s.File}>file</li>
          <li className={s.File}>
            <span>autoexec</span>
            <span>bat</span>
          </li>
          <li className={s.File}>
            <span>command</span>
            <span>com</span>
          </li>
          <li className={s.File}>
            <span>config</span>
            <span>sys</span>
          </li>
          <li className={s.File}>
            <span>Io</span>
            <span>sys</span>
          </li>
          <li className={s.File}>
            <span>11Pro</span>
            <span>sys</span>
          </li>
          <li className={s.File}>
            <span>Msdod</span>
            <span>sys</span>
          </li>
        </ul>
      </section>
      <section className={s.Col}>
        <header className={s.Header}>Name</header>
      </section>
      <section className={s.Col}>
        <header className={s.Header}>Name</header>
      </section>
    </section>
  );
};

export default Navigator;
