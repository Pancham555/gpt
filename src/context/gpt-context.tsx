import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  gptCredentials: GPTCredentialsProps;
  setGPTCredentials: Function;
}

export const GPTContext = createContext<ContextProps>({
  gptCredentials: {
    model: "",
    temperature: 0.25,
    maxTokens: 128,
    contextName: "system",
    context: "",
    input: "",
  },
  setGPTCredentials: () => {},
});

export interface GPTCredentialsProps {
  model: string;
  temperature: number;
  maxTokens: number;
  contextName: string;
  context: string;
  input: string;
}

export const GPTContextProvider = ({ children }: { children: ReactNode }) => {
  const [gptCredentials, setGPTCredentials] = useState<GPTCredentialsProps>({
    model: "",
    temperature: 0.25,
    maxTokens: 128,
    contextName: "system",
    context: "",
    input: "",
  });
  return (
    <GPTContext.Provider value={{ gptCredentials, setGPTCredentials }}>
      {children}
    </GPTContext.Provider>
  );
};
