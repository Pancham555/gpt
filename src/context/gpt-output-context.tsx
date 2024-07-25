import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  output: string;
  setOutput: Function;
}

export const GPTOutPutContext = createContext<ContextProps>({
  output: "",
  setOutput: () => {},
});

export const GPTOutPutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [output, setOutput] = useState<string>("");
  return (
    <GPTOutPutContext.Provider value={{ output, setOutput }}>
      {children}
    </GPTOutPutContext.Provider>
  );
};
