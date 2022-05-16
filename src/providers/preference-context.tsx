import React, {
  createContext,
  FunctionComponent,
  useState,
} from "react";

import {
  IconClockMode,
  SectionIntroductionMode,
} from "@components";

export type PreferenceContext = {
  introductionMode: SectionIntroductionMode;
  setIntroductionMode: (mode: SectionIntroductionMode) => void;
  clockMode: IconClockMode;
  setClockMode: (mode: IconClockMode) => void;
};

export const DEFAULT_NAVIGATION_CONTEXT: PreferenceContext = {
  introductionMode: "en",
  setIntroductionMode: () => {},
  clockMode: "local",
  setClockMode: () => {},
};

export const PreferenceContext = createContext<PreferenceContext>(DEFAULT_NAVIGATION_CONTEXT);

export const PreferenceContextProvider: FunctionComponent = (props) => {
  const [introductionMode, setIntroductionMode] = useState<SectionIntroductionMode>(DEFAULT_NAVIGATION_CONTEXT.introductionMode);
  const [clockMode, setClockMode] = useState<IconClockMode>(DEFAULT_NAVIGATION_CONTEXT.clockMode);

  const value = {
    introductionMode,
    setIntroductionMode,
    clockMode,
    setClockMode,
  };

  return (
    <PreferenceContext.Provider value={value}>
      {props.children}
    </PreferenceContext.Provider>
  );
};
