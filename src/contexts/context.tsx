"use client";

import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface State {
  language: string;
}

type Action = { type: "CHANGE_LANGUAGE"; payload: string };

interface ContextType {
  state: State;
  ChangeLanguage: (language: string) => void;
}

const LanguageContext = createContext<ContextType | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

interface ProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, { language: "eng" });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language");
    if (storedLanguage) {
      dispatch({ type: "CHANGE_LANGUAGE", payload: storedLanguage });
    }
    setIsHydrated(true);
  }, []);

  function ChangeLanguage(language: string) {
    window.localStorage.setItem("language", language);
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  }

  if (!isHydrated) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ state, ChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
