"use client";

import { FC, useEffect } from "react";

import s from "./MenuDropdown.module.scss";

type Props = {
  id: string;
  className?: string;
};

const MenuDropdown: FC<Props> = ({ id, className }) => {
  useEffect(() => {
    const el = document.getElementById(id);

    const handleClick = (e: any) => {
      if (e.target !== el && el) {
        el.style.display = "none";
      }
    };

    window.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("click", handleClick, true);
    };
  }, []);

  return (
    <div id={id} className={`${s.MenuDropdown} ${className}`}>
      <ul className={s.Ul}>
        <li className={s.Li}>
          <span>NCD Tree</span>
          <span>Alt+F4</span>
        </li>
        <li className={s.Li}>
          <span>Exit</span>
          <span>Esc</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
