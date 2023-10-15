"use client";
import s from "./hero-dropdown.module.scss";
import ArrowShortIcon from "@/public/icons/arrow-short.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import USFlag from "@/public/flags/us.png";
import RSFlag from "@/public/flags/rs.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

type DropdownData = { code: string; flag: StaticImageData };
type Dropdown = { data: DropdownData[]; active: boolean; selected: DropdownData };

const HeroDropdown = () => {
  const pathname = usePathname();
  const data = [
    { code: "en", flag: USFlag },
    { code: "sr", flag: RSFlag },
  ];
  const [dropdown, setDropdown] = useState<Dropdown>({
    data,
    active: false,
    selected: data.find((d) => d.code === pathname.split("/").join("")) ?? data[0],
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
            <Link href={`/${data.code}`} className={s.itemLink}>
              <Image src={data.flag} alt={`${data.code} flag`} className={s.flag} />
              {data.code}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroDropdown;
