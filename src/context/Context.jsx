import { createContext, useContext, useState } from "react";

const SWDContext = createContext();

function SWDProvider({ children }) {
  const [forgotMail, setForgotMail] = useState("");
  return (
    <SWDContext.Provider value={{ forgotMail, setForgotMail }}>
      {children}
    </SWDContext.Provider>
  );
}

function useStates() {
  const context = useContext(SWDContext);
  if (context === undefined) throw new Error("wrong placement accessing");
  return context;
}

export { SWDProvider, SWDContext, useStates };
