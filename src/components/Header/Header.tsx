import { FC } from "react";

import s from "./Header.module.scss";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

type Props = {
  id?: string;
  className?: string;
};

const Header: FC<Props> = ({ id, className = "" }) => {
  return (
    <header id={id} className={`${s.Header} ${className}`}>
      <nav className={s.Nav} role="navigation">
        <menu className={s.Ul}>
          <MenuItem
            className={s.Li}
            title="File"
            dropdownId="menu-dropdown-file"
          >
            <MenuDropdown id="menu-dropdown-file" />
          </MenuItem>
          <li className={s.Li}>Disk</li>
          <li className={s.Li}>Command</li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
