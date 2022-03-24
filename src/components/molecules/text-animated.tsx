import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Space,
  Text,
  TextProps,
} from "@components";
import {
  getRandomInteger,
  getRandomUniqueSortedIntegers,
  shuffle,
} from "@services";
import { theme } from "@themes";

export type TextAnimatedOutputItem = {
  type: "glitch" | "character";
  value: string;
};

export type TextAnimatedOutput = TextAnimatedOutputItem[];

export type TextAnimatedOptions = {
  duration?: number; // animation duration
  delay?: number; // delay before animation start
  glitchCharacters?: string; // characters used as glitch
  glitchProbability?: number; // probability for a character to appear as glitch on init (0~100%)
  minCursorCount?: number; // minimum amount of cursors inside the output
  maxCursorCount?: number; // maximum amount of cursors inside the output
};

export type TextAnimatedProps = TextProps & {
  children: string;
  options?: TextAnimatedOptions;
};

/**
 * Custom easing function that increase progress at start/end of animation and reduce progress in the middle of the animation
 * since timeout work in the opposite way from for example a distance, regular easing functions produce opposite effect
 * we want to write slower when eased, so longer timeout duration
 * we want to write faster when not eased, so slower timeout duration
 *
 * @param absoluteProgress absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation)
 * @param stepProgress uneased progress per step, used as base for slower/faster progress than average
 * @returns easead step progress
 */
const easeInOutCustom = (absoluteProgress: number, stepProgress: number) => {
  if (absoluteProgress < 0.15) {
    return stepProgress * 1.666;
  } else if (absoluteProgress >= 0.15 && absoluteProgress < 0.85) {
    return stepProgress * 0.715;
  } else {
    return stepProgress * 1.666;
  }
};

export const TextAnimated: FunctionComponent<TextAnimatedProps> = ({
  options,
  children,
  ...rest
}) => {
  // props
  const text = children;
  const {
    duration,
    delay,
    glitchCharacters,
    glitchProbability,
    minCursorCount,
    maxCursorCount,
  } = {
    duration: 1000,
    delay: 0,
    glitchCharacters: "ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍㅃㅉㄸㄲ쎠ㅑㅐㅔㅗㅓㅏㅣㅠㅜㅡㅒㅖ",
    glitchProbability: 25,
    minCursorCount: 1,
    maxCursorCount: 2,
    ...options,
  };

  // outputs
  const [outputs, setOutputs] = useState<TextAnimatedOutput[]>([]); // arrays of character/glitch to be rendered
  const outputsRef = useRef<TextAnimatedOutput[]>([]); // mutable ref on outputs state

  // cursors
  const textCursorsRef = useRef<number[]>([]); // array of cursors on text, each cursor point to index of text string (e.g. "Welcome" -> [0, 2] => ["W", "l"])
  const outputCursorsRef = useRef<number[]>([]); // array of cursors on output, each cursor point to current index of output (e.g. "Welcome" -> ["W"]["c"] => [0][0]; ["e"]["c"] => [1][0]; ["l"]["c"] => [2][0])

  // timeouts
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]); // timeout ids used for cleanup

  const incrementOutputCursor = useCallback((cursorIndex: number) => {
    outputCursorsRef.current[cursorIndex] = outputCursorsRef.current[cursorIndex] + 1;
  }, []);

  const updateOutputs = useCallback((value: TextAnimatedOutput[]) => {
    outputsRef.current = value;
    setOutputs(value);
  }, []);

  const updateOutput = useCallback((cursorIndex: number, value: TextAnimatedOutput) => {
    const newOutputs = outputsRef.current.map((output, index) => {
      if (index === cursorIndex) {
        return value;
      } else {
        return output;
      }
    });
    updateOutputs(newOutputs);
  }, [updateOutputs]);

  const updateTimeouts = useCallback((value: NodeJS.Timeout[]) => {
    timeoutsRef.current = value;
  }, []);

  const initCursors = useCallback(() => {
    // get random amount of cursors
    const cursorCount = getRandomInteger(minCursorCount, maxCursorCount);

    // get random positioned cursors on text (i.e. unique and sorted integers)
    const cursors = getRandomUniqueSortedIntegers(1, text.length - 1, cursorCount - 1);

    // first cursor is always 0, then add extra cursors
    const newTextCursors = [0, ...cursors];

    // init cursors values
    textCursorsRef.current = newTextCursors;
    outputCursorsRef.current = newTextCursors.map(() => 0);
  }, [maxCursorCount, minCursorCount, text.length]);

  const getRandomGlitches = useCallback((rollCount: number) => {
    const items: TextAnimatedOutputItem[] = [];

    for (let i = 0; i < rollCount; ++i) {
      const roll = getRandomInteger(0, 100);

      // add a glitch if roll succeeds
      const isSuccessfulRoll = roll <= glitchProbability;
      if (isSuccessfulRoll) {
        // get a random glitch character
        const roll = getRandomInteger(0, glitchCharacters.length - 1);
        const value = glitchCharacters[roll];

        items.push({
          type: "glitch",
          value,
        });
      }
    }

    return items;
  }, [glitchCharacters, glitchProbability]);

  const initOutputs = useCallback(() => {
    const newOutputs = textCursorsRef.current.map((textCursor, index) => {
      // calculate current text segment length
      const nextTextCursor = textCursorsRef.current[index + 1] || text.length;
      const textSegmentLength = nextTextCursor - textCursor;

      // init output with glitches (i.e. up to text segment length)
      const glitchCharacters = getRandomGlitches(textSegmentLength);
      const newOutput = [...glitchCharacters];

      return newOutput;
    });

    updateOutputs(newOutputs);
  }, [getRandomGlitches, text.length, updateOutputs]);

  const write = useCallback((cursorIndex: number) => {
    // get current character (i.e. initial text cursor position + current output cursor progression)
    const textCursor = textCursorsRef.current[cursorIndex];
    const outputCursor = outputCursorsRef.current[cursorIndex];
    const value = text[textCursor + outputCursor];

    // add character at cursor
    const character: TextAnimatedOutputItem = {
      type: "character",
      value,
    };
    const newOutput = [...outputsRef.current[cursorIndex]];
    newOutput.splice(outputCursor, 0, character);

    incrementOutputCursor(cursorIndex);
    updateOutput(cursorIndex, newOutput);
  }, [incrementOutputCursor, text, updateOutput]);

  const replace = useCallback((cursorIndex: number) => {
    // get current character (i.e. initial text cursor position + current output cursor progression)
    const textCursor = textCursorsRef.current[cursorIndex];
    const outputCursor = outputCursorsRef.current[cursorIndex];
    const value = text[textCursor + outputCursor];

    // replace glitch with character at cursor
    const character: TextAnimatedOutputItem = {
      type: "character",
      value,
    };
    const newOutput = [...outputsRef.current[cursorIndex]];
    newOutput[outputCursor] = character;

    incrementOutputCursor(cursorIndex);
    updateOutput(cursorIndex, newOutput);
  }, [incrementOutputCursor, text, updateOutput]);

  const getActions = useCallback(() => {
    const actions: (() => void)[] = [];

    textCursorsRef.current.forEach((textCursor, index) => {
      // calculate current text segment length and glitch count
      const nextTextCursor = textCursorsRef.current[index + 1] || text.length;
      const textSegmentLength = nextTextCursor - textCursor;
      const textSegmentGlitchCount = outputsRef.current[index].length;

      // add actions
      const replaceCount = textSegmentGlitchCount;
      for (let i = 0; i < replaceCount; ++i) {
        actions.push(() => replace(index));
      }
      const writeCount = textSegmentLength - textSegmentGlitchCount;
      for (let i = 0; i < writeCount; ++i) {
        actions.push(() => write(index));
      }
    });

    // shuffle actions (i.e. all cursor actions are shuffled together)
    const shuffledActions = shuffle(actions);

    return shuffledActions;
  }, [replace, text.length, write]);

  const getDelays = useCallback((count: number) => {
    const stepProgress = 1 / count;
    const delays: number[] = [];
    let accumulatedDelay = 0;

    for (let i = 0; i < count; ++i) {
      // calculate absolute progress
      const absoluteProgress = i / count;

      // calculate eased progress
      const easedProgress = easeInOutCustom(absoluteProgress, stepProgress);

      // calculate delay
      const delay = easedProgress * duration;
      delays.push(accumulatedDelay + delay);
      accumulatedDelay += delay;
    }

    return delays;
  }, [duration]);

  const start = useCallback(() => {
    initCursors();
    initOutputs();

    // trigger actions at eased timeouts
    const actions = getActions();
    const delays = getDelays(actions.length);
    const timeouts = delays.map(((delay, index) => {
      return setTimeout(() => {
        actions[index]();
      }, delay);
    }));

    updateTimeouts(timeouts);
  }, [getActions, getDelays, initCursors, initOutputs, updateTimeouts]);

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
  const renderOuputs = () => {
    // render placeholder when all outputs are empty (i.e. before start)
    const isPlaceholder = outputs.length === 0;
    if (isPlaceholder) {
      return (
        <span
          key={"placeholder"}>
          <Space/>
        </span>
      );
    }

    // render each output array items
    return outputs.map((outputItem, outputindex) => {
      return outputItem.map((item, index) => {
        if (item.type === "character") {
          return (
            <span
              key={`character-${outputindex}-${index}`}>
              {item.value}
            </span>
          );
        } else if (item.type === "glitch") {
          return (
            <span
              key={`glitch-${outputindex}-${index}`}
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
    });
  };

  return (
    <Text {...rest}>
      {renderOuputs()}
    </Text>
  );
};
