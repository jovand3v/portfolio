"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import s from "./work-project-carousel.module.scss";
import Image, { StaticImageData } from "next/image";
import ArrowIcon from "@/public/icons/arrow-short.svg";

type Props = {
  images: StaticImageData[];
  fullscreen: boolean;
  setFullscreen: Dispatch<SetStateAction<boolean>>;
  selected: StaticImageData;
  setSelected: Dispatch<SetStateAction<StaticImageData>>;
};

const WorkProjectCarousel = (props: Props) => {
  const { images, fullscreen, setFullscreen, selected, setSelected } = props;
  const listRef = useRef<HTMLUListElement>(null);
  const [dragging, setDragging] = useState(false);
  const itemSelectedRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    document.body.style.overflowY = fullscreen ? "hidden" : "visible";
  }, [fullscreen]);

  useEffect(() => {
    if (fullscreen && listRef.current && itemSelectedRef.current) {
      itemSelectedRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [selected, fullscreen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    if (fullscreen) {
      window.addEventListener("keydown", handleEsc);
    } else {
      window.removeEventListener("keydown", handleEsc);
    }
  }, [fullscreen]);

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
        }, 25);
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

  const handleArrowSelection = (direction: "forward" | "backward") => {
    const indexModifier = direction === "forward" ? 1 : -1;
    const newIndex = images.indexOf(selected) + indexModifier;
    setSelected(newIndex >= 0 && newIndex < images.length ? images[newIndex] : selected);
  };

  const handleArrowDisabled = (direction: "forward" | "backward"): boolean => {
    const indexModifier = direction === "forward" ? 1 : -1;
    return Boolean(images[images.indexOf(selected) + indexModifier]);
  };

  return (
    <div className={`${s.main} ${fullscreen ? s.mainFullscreen : ""}`}>
      {fullscreen && <div className={s.overlay} onClick={() => setFullscreen(false)}></div>}
      <div className={s.container}>
        <div className={s.fullscreenMainContainer}>
          {fullscreen && (
            <ArrowIcon
              className={`${s.arrowIcon} ${handleArrowDisabled("backward") ? "" : s.arrowDisabled}`}
              onClick={() => handleArrowSelection("backward")}
            />
          )}
          <div className={s.mainImgContainer} onClick={() => setFullscreen(true)}>
            <Image
              src={selected}
              alt=""
              className={s.mainImg}
              quality={100}
              width={1200}
              height={600}
              sizes="(max-width:650px) 90vw, (max-width: 1280px) 60vw, 70vw"
            />
          </div>
          {fullscreen && (
            <ArrowIcon
              className={`${s.arrowIcon} ${s.arrowIconRight} ${handleArrowDisabled("forward") ? "" : s.arrowDisabled}`}
              onClick={() => handleArrowSelection("forward")}
            />
          )}
        </div>
        <ul className={s.list} ref={listRef}>
          {images.map((img, i) => (
            <li
              className={`${s.item} ${img === selected ? s.itemSelected : ""}`}
              key={i}
              onClick={() => !dragging && setSelected(img)}
              ref={img === selected ? itemSelectedRef : null}
            >
              <Image src={img} alt="" className={s.itemImg} width={180} height={80} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkProjectCarousel;
