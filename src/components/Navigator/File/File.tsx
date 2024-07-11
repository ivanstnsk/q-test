import { FC } from "react";

import s from "./File.module.scss";

type Props = {
  name: string;
  ext?: string;
};

const File: FC<Props> = ({ name, ext }) => {
  return (
    <div className={s.File}>
      <span>{name}</span>
      {ext}
    </div>
  );
};

export default File;
