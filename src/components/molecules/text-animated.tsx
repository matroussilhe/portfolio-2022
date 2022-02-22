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
import {
  getRandomInteger,
} from "@services";
import { theme } from "@themes";

export type TextAnimatedOutputItem = {
  type: "glitch" | "character";
  value: string;
};

export type TextAnimatedOutput = TextAnimatedOutputItem[];

export type TextAnimatedOptions = {
  newGlitchProbability: number; // probability for glitch to appear on write (0~100%)
  replaceGlitchProbability: number; // probability for glitch to be replaced on write (0~100%)
  glitches: string; // characters used as glitch
  minStartingGlitches: number; // minimum number of starting glitch characters
  maxStartingGlitches: number; // maximum number of starting glitch characters
};

export type TextAnimatedProps = {
  text: string;
  duration?: number; // animation duration
  delay?: number; // delay before animation start
  options?: TextAnimatedOptions; // animation options
};

export const TextAnimated: FunctionComponent<TextAnimatedProps> = ({
  text,
  duration = 1000,
  delay = 0,
  options = {
    newGlitchProbability: 0,
    replaceGlitchProbability: 25,
    glitches: "ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍㅃㅉㄸㄲ쎠ㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅒㅖ",
    minStartingGlitches: 4,
    maxStartingGlitches: 8,
  },
}) => {
  const [output, setOutput] = useState<TextAnimatedOutput>([]);

  const intervalRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef<() => void>();
  const indexRef = useRef<number>(0);
  const outputRef = useRef<TextAnimatedOutput>(output);
  const glitchCountRef = useRef<number>(0);

  const getRandomGlitches = useCallback((min: number, max: number) => {
    const amount = getRandomInteger(min, max);

    const result: TextAnimatedOutput = [];
    for (let i = 0; i < amount; ++i) {
      const roll = getRandomInteger(0, options.glitches.length - 1);
      const glitch = options.glitches[roll];

      result.push({
        type: "glitch",
        value: glitch,
      });
    }

    return result;
  }, [options.glitches]);

  const initOutput = useCallback(() => {
    // add glitches
    const glitches = getRandomGlitches(options.minStartingGlitches, options.maxStartingGlitches);
    glitchCountRef.current = glitches.length;
    const newOutput = [...glitches];

    // update output
    outputRef.current = newOutput;
    setOutput(newOutput);
  }, [getRandomGlitches, options.maxStartingGlitches, options.minStartingGlitches]);

  const cleanupOutput = () => {
    // remove all glitches
    const newOutput = outputRef.current.filter(item => item.type !== "glitch");

    // update output
    outputRef.current = newOutput;
    setOutput(newOutput);
  };

  const start = useCallback(() => {
    initOutput();

    // start interval
    const writeSpeed = duration / text.length;
    const id = setInterval(() => {
      callbackRef.current?.();
    }, writeSpeed);
    intervalRef.current = id;
  }, [duration, initOutput, text.length]);

  const stop = useCallback(() => {
    if (!intervalRef.current) return;

    cleanupOutput();

    clearInterval(intervalRef.current);
  }, []);

  const updateIndex = useCallback(() => {
    const newIndex = indexRef.current + 1;
    indexRef.current = newIndex;

    const maxIndex = text.length;
    if (newIndex >= maxIndex) {
      stop();
    }
  }, [stop, text.length]);

  const write = useCallback(() => {
    let roll = getRandomInteger(0, 100);

    // TODO: remove if unused
    if (roll <= options.newGlitchProbability) {
      // add glitch to end of string
      const glitches = getRandomGlitches(1, 1);
      glitchCountRef.current = glitchCountRef.current + 1;
      const newOutput = [...outputRef.current, ...glitches];

      // update output
      outputRef.current = newOutput;
      setOutput(newOutput);

      return;
    }

    roll = getRandomInteger(0, 100);
    if (roll <= options.replaceGlitchProbability) {
      if (glitchCountRef.current <= 0) return;

      // replace glitch with character
      const newOutput = [...outputRef.current];
      const index = outputRef.current.length - glitchCountRef.current;
      const character: TextAnimatedOutputItem = {
        type: "character",
        value: text[indexRef.current],
      };
      newOutput[index] = character;
      glitchCountRef.current = glitchCountRef.current - 1;

      // update output
      outputRef.current = newOutput;
      setOutput(newOutput);

      // update progression
      updateIndex();

      // WIP: add another character/glitch on replace to avoid string going back effect
      // // add glitch to end of string
      // const glitches = getRandomGlitches(1, 1);
      // glitchCountRef.current = glitchCountRef.current + 1;
      // newOutput = [...outputRef.current, ...glitches];

      // // update output
      // outputRef.current = newOutput;
      // setOutput(newOutput);
    } else {
      // add text character at the end of string
      const newOutput = [...outputRef.current];
      const index = outputRef.current.length - glitchCountRef.current;
      const character: TextAnimatedOutputItem = {
        type: "character",
        value: text[indexRef.current],
      };
      newOutput.splice(index, 0, character);

      // update output
      outputRef.current = newOutput;
      setOutput(newOutput);

      // update progression
      updateIndex();
    }
  }, [getRandomGlitches, options.newGlitchProbability, options.replaceGlitchProbability, text, updateIndex]);

  // update callback on change
  useEffect(() => {
    callbackRef.current = write;
  }, [write]);

  // init
  useEffect(() => {
    // start after delay
    const timeout = setTimeout(() => {
      start();
    }, delay);

    return () => {
      clearTimeout(timeout);
      intervalRef.current ? clearInterval(intervalRef.current) : undefined;
    };
  }, [delay, start]);

  const renderOuput = () => {
    // render placeholder when output is empty (i.e. before start)
    if (output.length === 0) {
      return <span>&nbsp;</span>;
    }

    return output.map((item, index) => {
      if (item.type === "character") {
        return (
          <span
            key={`character-${index}`}>
            {item.value}
          </span>
        );
      } else if (item.type === "glitch") {
        return (
          <span
            key={`glitch-${index}`}
            sx={{
              opacity: 0.15,
              textShadow: `0px 0px 2px ${theme.colors["on-surface"]}`,
            }}>
            {item.value}
          </span>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Text
      variant={"heading5"}
      sx={{
        lineHeight: 1.4,
        color: "on-surface",
      }}>
      {renderOuput()}
    </Text>
  );
};
