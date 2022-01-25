import React, { FunctionComponent, useEffect, useState } from "react";

import {
  Flex,
  Icon,
  Text,
} from "@components";

export type IconClockMode = "en" | "ko";

export type IconClockProps = {};

const getNewYorkTime = () => {
  return Intl
    .DateTimeFormat(
      "en-US",
      {
        timeZone: "America/New_York",
        timeStyle: "short",
      },
    )
    .format(new Date());
};

const getSeoulTime = () => {
  return Intl
    .DateTimeFormat(
      "ko-KR",
      {
        timeZone: "Asia/Seoul",
        timeStyle: "short",
      },
    )
    .format(new Date());
};

const getTime = (mode: IconClockMode) => {
  if (mode === "en") {
    return getNewYorkTime();
  } else {
    return getSeoulTime();
  }
};

const getCity = (mode: IconClockMode) => {
  if (mode === "en") {
    return "NEW YORK CITY";
  } else {
    return "서울";
  }
};

const getItem = (mode: IconClockMode) => {
  return {
    time: getTime(mode),
    city: getCity(mode),
  };
};

export const IconClock: FunctionComponent<IconClockProps> = () => {
  const [mode, setMode] = useState<IconClockMode>("en");
  const [item, setItem] = useState(getItem(mode));

  useEffect(() => {
    const id = setInterval(() => {
      setItem(getItem(mode));
    }, 1000);

    return () => clearInterval(id);
  }, [mode]);

  const handleClick = () => {
    if (mode === "en") {
      const newMode = "ko";

      setMode(newMode);
      setItem(getItem(newMode));
    } else {
      const newMode = "en";

      setMode(newMode);
      setItem(getItem(newMode));
    }
  };

  return (
    <Flex
      onClick={handleClick}
      sx={{
        alignItems: "center",
        cursor: "pointer",
      }}>
      <Icon
        src={"/images/circle.svg"}
        size={"20px"}
        color={"on-surface"}
      />
      <Text
        variant={"label2"}
        sx={{
          ml: 1,
          fontWeight: "medium",
          color: "on-surface",
        }}>
        {`${item.time} ${item.city}`}
      </Text>
    </Flex>
  );
};
