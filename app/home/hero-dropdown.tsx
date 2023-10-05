import s from "./hero-dropdown.module.scss";
import ArrowShortIcon from "@/public/icons/arrow-short.svg";
import Image from "next/image";
import { useState } from "react";
import USFlag from "@/public/flags/us.png";
import RSFlag from "@/public/flags/rs.png";

const HeroDropdown = () => {
  const [dropdown, setDropdown] = useState({
    data: [
      { code: "EN", flag: USFlag },
      { code: "SR", flag: RSFlag },
    ],
    active: false,
    selected: { code: "EN", flag: USFlag },
  });

  return (
    <div
      className={`${s.dropdown} ${dropdown.active ? s.dropdownActive : ""}`}
      onClick={() => setDropdown((d) => ({ ...d, active: !d.active }))}
    >
      <div className={s.dropdownSelected}>
        <Image src={dropdown.selected.flag} alt={`${dropdown.selected.code} flag`} className={s.flag} />
        {dropdown.selected.code}
      </div>
      <ArrowShortIcon className={s.arrowIcon} />
      <ul className={s.list}>
        {dropdown.data.map((data, i) => (
          <li
            className={`${s.item} ${dropdown.selected.code === data.code ? s.itemSelected : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setDropdown((d) => ({ ...d, selected: data, active: false }));
            }}
            key={i}
          >
            <Image src={data.flag} alt={`${data.code} flag`} className={s.flag} />
            {data.code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroDropdown;
