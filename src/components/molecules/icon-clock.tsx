import React, { FunctionComponent, useEffect, useState } from "react";

import {
  Flex,
  Icon,
  Text,
} from "@components";
import {
  get,
} from "@services";

export type GeolocationData = {
  city: string;
  timezone: string;
};

export type IconClockMode = "local" | "other";

export type IconClockProps = {};

const getGeolocationData = async (): Promise<GeolocationData | undefined> => {
  const response = await get("http://ip-api.com/json/?fields=status,city,timezone");

  if (response?.status === "success") {
    return {
      timezone: response.timezone,
      city: response.city,
    };
  } else {
    return undefined;
  }
};

const getOtherTime = () => {
  return Intl
    .DateTimeFormat(
      "ko-KR",
      {
        timeZone: "Asia/Seoul",
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
      },
    )
    .format(new Date());
};

const getOtherCity = () => {
  return "서울";
};

const getFallbackTime = () => {
  return Intl
    .DateTimeFormat(
      "en-US",
      {
        timeZone: "America/New_York",
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
      },
    )
    .format(new Date());
};

const getFallbackCity = () => {
  return "NEW YORK CITY";
};

const getLocalTime = (data: GeolocationData | undefined) => {
  if (!data?.timezone) {
    return getFallbackTime();
  }

  return Intl
    .DateTimeFormat(
      "en-US",
      {
        timeZone: data.timezone,
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
      },
    )
    .format(new Date());
};

const getLocalCity = (data: GeolocationData | undefined) => {
  if (!data?.city) {
    return getFallbackCity();
  }

  return data.city.toUpperCase();
};

const getTime = (mode: IconClockMode, data?: GeolocationData) => {
  if (mode === "local") {
    return getLocalTime(data);
  } else {
    return getOtherTime();
  }
};

const getCity = (mode: IconClockMode, data?: GeolocationData) => {
  if (mode === "local") {
    return getLocalCity(data);
  } else {
    return getOtherCity();
  }
};

export const IconClock: FunctionComponent<IconClockProps> = () => {
  const [data, setData] = useState<GeolocationData>();
  const [mode, setMode] = useState<IconClockMode>("local");
  const [time, setTime] = useState<string>("");
  const [city, setCity] = useState<string>("");

  // request geolocation data
  useEffect(() => {
    async function getData() {
      const data = await getGeolocationData();

      setData(data);
      setTime(getLocalTime(data));
      setCity(getLocalCity(data));
    }

    getData();
  }, []);

  // update time every second
  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime(mode, data));
    }, 1000);

    return () => clearInterval(id);
  }, [mode, data]);

  // change mode on click
  const handleClick = () => {
    if (mode === "local") {
      const newMode = "other";

      setMode(newMode);
      setTime(getTime(newMode));
      setCity(getCity(newMode));
    } else {
      const newMode = "local";

      setMode(newMode);
      setTime(getTime(newMode, data));
      setCity(getCity(newMode, data));
    }
  };

  return (
    <Flex
      onClick={handleClick}
      sx={{
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}>
      <Icon
        src={"/images/circle.svg"}
        size={"20px"}
        color={"on-surface"}
      />
      <Text
        variant={"label3"}
        sx={{
          ml: 1,
          fontFamily: "body",
          fontWeight: "bold",
          fontSize: "12px",
          color: "on-surface",
        }}>
        {`${time} ${city}`}
      </Text>
    </Flex>
  );
};
