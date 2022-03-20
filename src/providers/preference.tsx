import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";

import {
  IconClockMode,
  SectionIntroductionModee,
} from "@components";

export type PreferenceContext = {
  introductionMode: SectionIntroductionModee;
  setIntroductionMode: (mode: SectionIntroductionModee) => void;
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

export const usePreferenceContext = () => {
  return useContext(PreferenceContext);
};

export const PreferenceContextProvider: FunctionComponent = (props) => {
  const [introductionMode, setIntroductionMode] = useState<SectionIntroductionModee>(DEFAULT_NAVIGATION_CONTEXT.introductionMode);
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
