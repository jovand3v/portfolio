"use client";
import { useEffect, useRef, useState } from "react";
import s from "./work-project-carousel.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  images: StaticImageData[];
};

const WorkProjectCarousel = (props: Props) => {
  const { images } = props;
  const listRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState<StaticImageData>(images[0]);
  const [dragging, setDragging] = useState(false);

  // Handle click and drag scrolling
  useEffect(() => {
    if (!listRef.current) return;
    let posX: { mouse: number; scroll: number } = { mouse: 0, scroll: 0 };
    const list = listRef.current;

    const handleMouseDown = (e: MouseEvent) => {
      posX = { mouse: e.clientX, scroll: list.scrollLeft };

      const handleMouseMove = (e: MouseEvent) => {
        setDragging(true);
        const scrolledX = e.clientX - posX.mouse;
        list.scrollLeft = posX.scroll - scrolledX;
      };
      list.addEventListener("mousemove", handleMouseMove);

      // Stopping the drag scroll
      const handleDragStop = () => {
        setTimeout(() => {
          setDragging(false);
        }, 50);
        // remove dragging
        list.removeEventListener("mousemove", handleMouseMove);
        // remove the events that trigger drag stop
        list.removeEventListener("mouseup", handleDragStop);
        list.removeEventListener("mouseleave", handleDragStop);
      };
      list.addEventListener("mouseup", handleDragStop);
      list.addEventListener("mouseleave", handleDragStop);
    };

    list.addEventListener("mousedown", handleMouseDown);
  }, [listRef]);

  return (
    <div className={s.main}>
      <div className={s.mainImgContainer}>
        <Image src={selected} alt="" className={s.mainImg} quality={100} />
      </div>
      <ul className={s.list} ref={listRef}>
        {images.map((img, i) => (
          <li className={s.item} key={i} onClick={() => !dragging && setSelected(img)}>
            <Image src={img} alt="" className={s.itemImg} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkProjectCarousel;
