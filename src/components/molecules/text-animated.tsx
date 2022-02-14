import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Text,
} from "@components";

export type TextAnimatedProps = {};

export const TextAnimated: FunctionComponent<TextAnimatedProps> = ({
  children,
}) => {
  // TODO: get text as prop
  const text = "Hi guys, my name is Mathieu and I am from France";
  // TODO: get delay as prop
  const delay = 1000;

  const options = {
    speed: 75, // write speed in ms
    probability: 50, // probability for glitch appearance
    glitches: "가나다", // characters used as glitch
  };

  const intervalRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef<() => void>();

  const indexRef = useRef<number>(0);
  const outputRef = useRef<string>("");
  const glitchCountRef = useRef<number>(0);

  const [output, setOutput] = useState<string>("");

  const getRandomInteger = (min: number, max: number) => {
    const minInteger = Math.ceil(min);
    const maxInteger = Math.floor(max);

    return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
  };

  const clearGlitches = useCallback(() => {
    const newOutput = outputRef.current.slice(0, outputRef.current.length - glitchCountRef.current);
    outputRef.current = newOutput;
    setOutput(newOutput);
  }, []);

  const getRandomGlitches = useCallback((amount: number) => {
    let result = "";
    for (let i = 0; i < amount; ++i) {
      const roll = getRandomInteger(0, options.glitches.length - 1);
      const glitch = options.glitches[roll];

      result = `${result}${glitch}`;
    }

    return result;
  }, [options.glitches]);

  const start = useCallback(() => {
    // init output
    const glitches = getRandomGlitches(5);
    glitchCountRef.current = glitches.length;

    // update output
    const newOutput = `${outputRef.current}${glitches}`;
    outputRef.current = newOutput;
    setOutput(newOutput);

    // start interval (with delay)
    setTimeout(() => {
      const id = setInterval(() => {
        callbackRef.current?.();
      }, options.speed);
      intervalRef.current = id;
    }, delay);
  }, [getRandomGlitches, options.speed]);

  const stop = useCallback(() => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
  }, []);

  const updateIndex = useCallback(() => {
    const newIndex = indexRef.current + 1;
    indexRef.current = newIndex;

    const maxIndex = text.length;
    if (newIndex === maxIndex) {
      stop();
    }
  }, [stop]);

  const addCharacter = useCallback(() => {
    const roll = getRandomInteger(0, 100);

    if (roll <= options.probability) {
      // add glitch to end of string
      const glitches = getRandomGlitches(1);
      glitchCountRef.current = glitchCountRef.current + 1;
      const newOutput = `${outputRef.current}${glitches}`;

      // update output
      outputRef.current = newOutput;
      setOutput(newOutput);
    } else {
      // clear glitches
      clearGlitches();
      glitchCountRef.current = 0;

      // add text character to end of string
      const newOutput = `${outputRef.current}${text[indexRef.current]}`;

      // update output
      outputRef.current = newOutput;
      setOutput(newOutput);

      // update progression
      updateIndex();
    }
  }, [clearGlitches, getRandomGlitches, updateIndex, options.probability]);

  // update output state on change
  useEffect(() => {
    setOutput(outputRef.current);
  }, [outputRef]);

  // update callback on change
  useEffect(() => {
    callbackRef.current = addCharacter;
  }, [addCharacter]);

  // init interval
  useEffect(() => {
    start();

    return () => intervalRef.current ? clearInterval(intervalRef.current) : undefined;
  }, [start]);

  return (
    <Text
      variant={"heading4"}
      sx={{
        lineHeight: 1.2,
        color: "on-surface",
      }}>
      {output}
    </Text>
  );
};
