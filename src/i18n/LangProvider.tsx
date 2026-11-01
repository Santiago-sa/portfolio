import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { dictionary, type Dict, type Lang } from "./dictionary";

interface LangState {
  lang: Lang;
  t: Dict;
  tr: (text: string) => string;
  setLang: (lang: Lang) => void;
}

const LangCtx = createContext<LangState | null>(null);

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* sin acceso a localStorage */
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* ignorar */
    }
  }, []);

  const value = useMemo<LangState>(() => {
    const t = dictionary[lang];
    return { lang, t, setLang, tr: (text) => t.labels[text] ?? text };
  }, [lang, setLang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LangProvider>");
  return ctx;
}
