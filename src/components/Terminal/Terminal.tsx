"use client";

import { FC, useEffect, useRef, useState } from "react";

import s from "./Terminal.module.scss";

type Props = {
  id?: string;
  className?: string;
};

const Terminal: FC<Props> = ({ id, className = "" }) => {
  const [isPlaceholder, setIsPlaceholder] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const timerRef = useRef<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setIsPlaceholder((isPlaceholder) => !isPlaceholder);
    }, 500);
  }, []);

  return (
    <div id={id} className={`${s.Terminal} ${className}`}>
      C:\
      <input
        className={s.Input}
        type="text"
        placeholder={isPlaceholder ? ">" : ""}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Terminal;
