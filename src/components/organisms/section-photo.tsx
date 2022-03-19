import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";

import {
  Flex,
  FlexProps,
  Image,
} from "@components";
import {
  useResponsiveContext,
} from "@providers";
import {
  getRandomInteger,
  Photo,
} from "@services";

export type SectionPhotoProps = FlexProps & {
  photo: Photo;
};

export type SectionPhotoGridItem = {
  ref: HTMLElement;
  hasBeenDrawn: boolean;
  y: number;
  previousY: number;
  xPos: number;
  yPos: number;
  xColumn: number;
  yColumn: number;
  index: number;
  target: number;
  friction: number;
  deltaY: number;
  scrollSpeed: number;
  width: number;
  height: number;
};

export type SectionPhotoGridPosition = {
  x: number;
  y: number;
};

const COLUMNS = 3;
const PADDING_VERTICAL = 0;
const PADDING_COLUMN = 20;
const IMAGE_BASE_RATIO = 0.75;
const RANDOM_X_SKIP_MAX = 2;
const RANDOM_OFFSET_X_BASE = 0.75;
const RANDOM_OFFSET_Y_BASE = 0.5;
const OVERLAP_LIMIT = 0.4;
const maxWheel = 100;
const autoSpeed = -1;

const lerp = (x1: number, x2: number, t: number) => {
  return x1 + (x2 - x1) * t;
};

const easeOutCubic = (x: number) => {
  return Math.pow(x - 1, 3) + 1;
};

const easeInCubic = (x: number) => {
  return Math.pow(x, 3);
};

const calculateDistance = (x1: number, x2: number, y1: number, y2: number) => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

export const SectionPhoto: FunctionComponent<SectionPhotoProps> = ({
  photo,
  ...rest
}) => {
  const {
    width: windowWidth,
    height: windowHeight,
  } = useResponsiveContext();

  // TODO: move outside or use useMemo
  // get random background color
  const backgroundColors = ["red-700", "green-700", "blue-700"];
  const index = getRandomInteger(0, backgroundColors.length - 1);
  const backgroundColor = backgroundColors[index];

  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  const gridItems = useRef<SectionPhotoGridItem[]>([]);
  const totalHeight = useRef(0);

  const target = useRef(0);
  const targetPercent = useRef(0);

  let oldTarget = 0;
  let requestAnimationFrame: number;
  let lerpedAutoScroll = 1;
  let autoScroll = 1;
  let timeAutoScroll = 1;
  let fakeTimer = 0;

  const initScroll = () => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      updateTarget(event);
    };

    ref.current.addEventListener("wheel", onWheel, { passive: false });
  };

  const createGrid = () => {
    const DOMElements = ref.current && ref.current.querySelectorAll(".about-photo");
    const positions = createGridPositions(DOMElements.length);

    gridItems.current = Array.from(DOMElements).map((item, index) => {
      return createGridItem(item as HTMLElement, index, positions);
    });

    // now add some random offset by avoid overlap
    gridItems.current.forEach((gridItem, index) => {
      const previousItems = index > 0 && gridItems.current.slice(0, index);

      if (previousItems) {
        let allClear = false;
        let maxTry = 0;
        let randomOffsetX = 0;
        let randomOffsetY = 0;

        while (allClear === false && maxTry < 30) {
          randomOffsetX = -RANDOM_OFFSET_X_BASE + Math.random() * RANDOM_OFFSET_X_BASE * 2;
          randomOffsetX = Math.round(randomOffsetX * 100) / 100;

          randomOffsetY = -RANDOM_OFFSET_Y_BASE + Math.random() * RANDOM_OFFSET_Y_BASE * 2;
          randomOffsetY = Math.round(randomOffsetY * 100) / 100;

          allClear = true;

          const newX = gridItem.xColumn + randomOffsetX;
          for (let i = 0; i < previousItems.length; i++) {
            const previousItem = previousItems[i];
            const distanceAfterOffset = calculateDistance(
              newX,
              previousItem.xColumn,
              gridItem.yColumn + randomOffsetY,
              previousItem.yColumn
            );

            if (distanceAfterOffset < OVERLAP_LIMIT) {
              allClear = false;
            }

            if (newX < -0.25) {
              allClear = false;
            }

            if (newX > COLUMNS - 0.25) {
              allClear = false;
            }
          }
          maxTry++;
        }
        gridItem.xColumn += randomOffsetX;
        gridItem.yColumn += randomOffsetY;
      }
    });

    reflow();
  };

  const createGridPositions = (itemsLength: number): SectionPhotoGridPosition[] => {
    let currentRow = -1;
    let currentColumn = 0;
    const positions = [];

    for (let i = 0; i < itemsLength; i++) {
      const newRow = currentRow + 1 + Math.round(RANDOM_X_SKIP_MAX * Math.random());
      currentRow = newRow;

      if (newRow > COLUMNS - 1) {
        currentRow = newRow % COLUMNS;
        currentColumn += 1;
      }

      positions.push({ x: currentRow, y: currentColumn });
    }

    return positions;
  };

  const createGridItem = (element: HTMLElement, index: number, gridPositions: SectionPhotoGridPosition[]) => {
    const scrollSpeed = 0.8 + Math.random() * 0.5;

    return {
      ref: element,
      hasBeenDrawn: false,
      previousY: 0,
      y: 0,
      xPos: 0,
      yPos: 0,
      xColumn: gridPositions[index].x,
      yColumn: gridPositions[index].y,
      index,
      target: 0,
      friction: 0.1 + Math.random() * 0.1,
      deltaY: 0,
      scrollSpeed: scrollSpeed,
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  };

  // main target Y here
  const updateTarget = (evt: WheelEvent) => {
    let deltaWheelY = 0;
    if (evt.deltaY > 0) {
      deltaWheelY = Math.min(evt.deltaY, maxWheel);
    } else {
      deltaWheelY = -Math.min(Math.abs(evt.deltaY), maxWheel);
    }

    target.current -= deltaWheelY;
    target.current = Math.round(target.current * 10000) / 10000;
    targetPercent.current = (target.current / totalHeight.current) % 1;

    autoScroll = 0;
    timeAutoScroll = 0;

    for (let i = 0; i < gridItems.current.length; i++) {
      const current = gridItems.current[i];

      current.target -= deltaWheelY * current.scrollSpeed;
      current.target = Math.round(current.target * 1000) / 1000;
    }
  };

  const update = () => {
    for (let i = 0; i < gridItems.current.length; i++) {
      const current = gridItems.current[i];
      current.previousY = current.y;

      // we also need to make sure to add current.scrollSpeed here
      current.target += autoSpeed * lerpedAutoScroll * current.scrollSpeed;
      current.y += autoSpeed * lerpedAutoScroll * current.scrollSpeed;

      current.deltaY = current.target - current.y;
      current.y = current.y + current.deltaY * current.friction;

      current.y = Math.round(1000 * current.y) / 1000;
      applyConstrainsPerThumb(current);

      draw(current);
    }

    // turn the autoScroll on/off
    if (autoScroll === 1 && timeAutoScroll <= 1) {
      timeAutoScroll += 0.01;
      if (Math.round(1000 * lerpedAutoScroll) / 1000 === autoScroll) {
        lerpedAutoScroll = autoScroll;
      }
      lerpedAutoScroll = lerp(lerpedAutoScroll, 1, easeInCubic(timeAutoScroll));
    }

    if (autoScroll === 0 && timeAutoScroll <= 1) {
      timeAutoScroll += 0.01;
      if (Math.round(1000 * lerpedAutoScroll) / 1000 === autoScroll) {
        lerpedAutoScroll = autoScroll;
      }
      lerpedAutoScroll = lerp(lerpedAutoScroll, 0, easeOutCubic(timeAutoScroll));
    }

    if (target.current === oldTarget) {
      fakeTimer++;
    } else {
      fakeTimer = 0;
    }

    if (fakeTimer > 30 && autoScroll !== 1) {
      autoScroll = 1;
      timeAutoScroll = 0;
    }

    oldTarget = target.current;
    requestAnimationFrame = window.requestAnimationFrame(() => update());
  };

  const applyConstrainsPerThumb = (item: SectionPhotoGridItem) => {
    const currentY = item.y + item.yPos;

    const offsetSpeedY = totalHeight.current * item.scrollSpeed - totalHeight.current;
    const totalHeightOffsetSpeed = totalHeight.current + offsetSpeedY;

    if (currentY < -totalHeightOffsetSpeed + windowHeight) {
      // you want to always add the same delta to avoid discrepancy between target values!
      // so we use the target to calculate this since we are going to update it
      const deltaDiff = totalHeightOffsetSpeed + item.target;
      item.target = 0 + deltaDiff;
      item.y = 0 + deltaDiff - item.deltaY;
    } else if (currentY >= totalHeightOffsetSpeed - item.height) {
      // versus the target where the infinite loop starts : (this.totalHeightOffsetSpeed - item.height)
      const deltaDiff = item.target + item.yPos - (totalHeightOffsetSpeed - item.height);
      item.target = -item.yPos - item.height + deltaDiff;
      item.y = -item.yPos - item.height + deltaDiff - item.deltaY;
    }
  };

  const draw = (gridElement: SectionPhotoGridItem) => {
    const y = gridElement.yPos + gridElement.y;
    const previousY = gridElement.yPos + gridElement.previousY;

    // logic to avoid useless painting
    const isGridElementBefore = y < -gridElement.height && previousY < -gridElement.height;
    const isGridElementAfter = y > windowHeight && previousY > windowHeight;
    if ((!isGridElementBefore && !isGridElementAfter) || !gridElement.hasBeenDrawn) {
      gridElement.ref.style.transform = `translate3d(${gridElement.xPos}px,${y}px,0px)`;
    }

    if (!gridElement.hasBeenDrawn) {
      gridElement.hasBeenDrawn = true;
    }
  };

  const reflow = useCallback(() => {
    const halfWindowWidth = windowWidth / 2;
    const items = gridItems.current;
    let furthestEnd = 0;
    const paddingVertical = PADDING_VERTICAL * windowWidth;

    for (let i = 0; i < items.length; i++) {
      const current = items[i];

      let columnWidth = halfWindowWidth / COLUMNS - PADDING_COLUMN;

      // let's just make the wide image slightly bigger
      const aspectRatio = current.width / current.height;
      if (aspectRatio > 1) {
        columnWidth *= 1.2;
        columnWidth -= 0.1;
      }

      current.ref.style.width = `${columnWidth}px`;
      current.width = columnWidth;

      const height = current.ref.offsetHeight;
      current.height = height;

      const columnHeight = columnWidth / IMAGE_BASE_RATIO;
      const yPosOriginal = paddingVertical / 2 + columnHeight * current.yColumn;

      // we now need to offset based on scrollSpeed since we want to make sure item will reach middle of the screen at the same time
      // to do this, we are calculating the difference between the calculateDistance from start to middle of the screen
      // add offsetting this by the difference created by the speed
      const distanceToCenter = yPosOriginal - (windowHeight / 2 - height / 2);
      current.xPos = (halfWindowWidth / COLUMNS) * current.xColumn + PADDING_COLUMN / 2;
      current.yPos = yPosOriginal + distanceToCenter * current.scrollSpeed - distanceToCenter;

      const end = yPosOriginal + height;
      if (end > furthestEnd) {
        furthestEnd = end;
      }
    }
    totalHeight.current = furthestEnd + paddingVertical / 2;

    for (let i = 0; i < items.length; i++) {
      const current = items[i];
      current.y = totalHeight.current * targetPercent.current;
      current.target = totalHeight.current * targetPercent.current;

      // make sure to redraw
      current.hasBeenDrawn = false;
    }
  }, [windowHeight, windowWidth]);

  useEffect(() => {
    initScroll();
    createGrid();
    update();

    return () => cancelAnimationFrame(requestAnimationFrame);
  }, []);

  useEffect(() => {
    reflow();
  }, [windowWidth, windowHeight, reflow]);

  return (
    <Flex
      ref={ref}
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        backgroundColor,
        overflow: "hidden",
        flexWrap: "wrap",
      }}
      {...rest}>
      {photo.photos.map((photo, index) => {
        return (
          <Image
            key={`section-photo-photo-${index}`}
            className={"about-photo"}
            src={`${photo.image}&w=600`}
            width={photo.dimensions.width}
            height={photo.dimensions.height}
            loading={"lazy"}
            decoding={"async"}
            onLoad={(event) => {
              (event.currentTarget as HTMLImageElement).style.opacity = "1";
            }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "300px",
              height: "auto",
              aspectRatio: `${photo.dimensions.width} / ${photo.dimensions.height}`,
              opacity: 0,
              transition: "opacity 1000ms ease-out",
              pointerEvents: "none",
            }}
          />
        );
      })}
    </Flex>
  );
};
