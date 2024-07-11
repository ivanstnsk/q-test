"use client";

import { FC } from "react";

type Props = {
  title: string;
  dropdownId: string;
  className?: string;
  children?: React.ReactNode;
};

const MenuItem: FC<Props> = ({ title, dropdownId, className, children }) => {
  const handleClick = () => {
    const el = document.getElementById(dropdownId);

    if (el) {
      el.style.display = "flex";
    }
  };

  return (
    <li className={className} onClick={handleClick}>
      {title}
      {children}
    </li>
  );
};

export default MenuItem;
