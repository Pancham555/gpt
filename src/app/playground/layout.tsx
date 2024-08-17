"use client";
import { GPTContextProvider } from "@/context/gpt-context";
import { GPTOutPutContextProvider } from "@/context/gpt-output-context";
import { Suspense } from 'react'
 
export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GPTContextProvider>
      <GPTOutPutContextProvider>
        <Suspense>
          {children}
        </Suspense>
      </GPTOutPutContextProvider>
    </GPTContextProvider>
  );
}
