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
  easeInOutQuad,
  getRandomInteger,
  shuffle,
} from "@services";
import { theme } from "@themes";

export type TextAnimatedOutputItem = {
  type: "glitch" | "character";
  value: string;
};

export type TextAnimatedOutput = TextAnimatedOutputItem[];

export type TextAnimatedOptions = {
  glitches: string; // characters used as glitch
  minGlitches: number; // minimum count of starting glitch characters
  maxGlitches: number; // maximum count of starting glitch characters
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
    glitches: "ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍㅃㅉㄸㄲ쎠ㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅒㅖ",
    minGlitches: 4,
    maxGlitches: 8,
  },
}) => {
  const [output, setOutput] = useState<TextAnimatedOutput>([]);

  const outputRef = useRef<TextAnimatedOutput>(output);
  const indexRef = useRef<number>(0);
  const glitchCountRef = useRef<number>(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const updateOutput = useCallback((value) => {
    outputRef.current = value;
    setOutput(value);
  }, []);

  const incrementIndex = useCallback(() => {
    indexRef.current = indexRef.current + 1;
  }, []);

  const updateGlitchCount = useCallback((value) => {
    glitchCountRef.current = value;
  }, []);

  const decrementGlitchCount = useCallback(() => {
    glitchCountRef.current = glitchCountRef.current - 1;
  }, []);

  const updateTimeouts = useCallback((value) => {
    timeoutsRef.current = value;
  }, []);

  const getRandomGlitches = useCallback((count) => {
    const result: TextAnimatedOutput = [];
    for (let i = 0; i < count; ++i) {
      const roll = getRandomInteger(0, options.glitches.length - 1);
      const glitch = options.glitches[roll];

      result.push({
        type: "glitch",
        value: glitch,
      });
    }

    return result;
  }, [options.glitches]);

  const initOutput = useCallback((glitchCount) => {
    // add glitches to output
    const glitches = getRandomGlitches(glitchCount);
    const newOutput = [...glitches];

    updateGlitchCount(glitchCount);
    updateOutput(newOutput);
  }, [getRandomGlitches, updateGlitchCount, updateOutput]);

  const write = useCallback(() => {
    // add character at the end of string (before glitches start)
    const newOutput = [...outputRef.current];
    const index = outputRef.current.length - glitchCountRef.current;
    const value = text[index];
    const character: TextAnimatedOutputItem = {
      type: "character",
      value,
    };
    newOutput.splice(index, 0, character);

    incrementIndex();
    updateOutput(newOutput);
  }, [incrementIndex, text, updateOutput]);

  const replace = useCallback(() => {
    // replace glitch with character at the end of string (at glitches start)
    const newOutput = [...outputRef.current];
    const index = outputRef.current.length - glitchCountRef.current;
    const value = text[index];
    const character: TextAnimatedOutputItem = {
      type: "character",
      value,
    };
    newOutput[index] = character;

    incrementIndex();
    decrementGlitchCount();
    updateOutput(newOutput);
  }, [decrementGlitchCount, incrementIndex, text, updateOutput]);

  const getActions = useCallback((glitchCount) => {
    // init actions
    const writeCount = text.length - glitchCount;
    const replaceCount = glitchCount;
    const actions: (() => void)[] = [];
    for (let i = 0; i < replaceCount; ++i) {
      actions.push(replace);
    }
    for (let i = 0; i < writeCount; ++i) {
      actions.push(write);
    }

    // shuffle actions
    const shuffledActions = shuffle(actions);

    return shuffledActions;
  }, [text.length, replace, write]);

  const getDelays = useCallback(() => {
    const linearStepDuration = duration / text.length;

    const delays: number[] = [];
    for (let i = 0; i < text.length; ++i) {
      // calculate linear progress
      const linearElaspedTime = i * linearStepDuration;
      const linearProgress = linearElaspedTime / duration;

      // calculate eased progress
      const easedProgess = easeInOutQuad(linearProgress);

      // calculate eased delay
      const delay = duration * easedProgess;
      delays.push(delay);
    }

    return delays;
  }, [duration, text.length]);

  // start animation
  const start = useCallback(() => {
    // get random glitch count based on option
    const glitchCount = getRandomInteger(options.minGlitches, options.maxGlitches);

    initOutput(glitchCount);

    // trigger actions at eased timeouts
    const actions = getActions(glitchCount);
    const delays = getDelays();
    const timeouts = delays.map(((delay, index) => {
      return setTimeout(() => {
        actions[index]();
      }, delay);
    }));

    updateTimeouts(timeouts);
  }, [getActions, getDelays, initOutput, options.maxGlitches, options.minGlitches, updateTimeouts]);

  // stop animation
  const stop = useCallback(() => {
    timeoutsRef.current.forEach((timeout) => {
      clearTimeout(timeout);
    });
  }, []);

  // init
  useEffect(() => {
    // start after delay
    const timeout = setTimeout(() => {
      start();
    }, delay);

    // cleanup
    return () => {
      clearTimeout(timeout);
      stop();
    };
  }, [delay, start, stop]);

  // render on state change (i.e. ouput change)
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
