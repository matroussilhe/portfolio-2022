import React, {
  createContext,
  FunctionComponent,
  useState,
} from "react";

import {
  IconClockMode,
  SectionIntroductionMode,
} from "@components";

export type PreferenceState = {
  introductionMode: SectionIntroductionMode;
  setIntroductionMode: (mode: SectionIntroductionMode) => void;
  clockMode: IconClockMode;
  setClockMode: (mode: IconClockMode) => void;
};

export const DEFAULT_PREFERENCE_STATE: PreferenceState = {
  introductionMode: "en",
  setIntroductionMode: () => {},
  clockMode: "local",
  setClockMode: () => {},
};

export const PreferenceContext = createContext<PreferenceState>(DEFAULT_PREFERENCE_STATE);

export const PreferenceContextProvider: FunctionComponent = (props) => {
  const [introductionMode, setIntroductionMode] = useState<SectionIntroductionMode>(DEFAULT_PREFERENCE_STATE.introductionMode);
  const [clockMode, setClockMode] = useState<IconClockMode>(DEFAULT_PREFERENCE_STATE.clockMode);

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
