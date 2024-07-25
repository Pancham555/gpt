"use client";
import { GPTContextProvider } from "@/context/gpt-context";
import { GPTOutPutContextProvider } from "@/context/gpt-output-context";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GPTContextProvider>
      <GPTOutPutContextProvider>{children}</GPTOutPutContextProvider>
    </GPTContextProvider>
  );
}
