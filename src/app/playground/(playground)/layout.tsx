"use client";
import ThemeButton from "@/components/theme";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GPTContext, GPTCredentialsProps } from "@/context/gpt-context";
import { GPTOutPutContext } from "@/context/gpt-output-context";
import axios from "axios";
import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    gptCredentials,
    setGPTCredentials,
  }: { gptCredentials: GPTCredentialsProps; setGPTCredentials: Function } =
    useContext(GPTContext);
  const { output } = useContext(GPTOutPutContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [models, setModels] = useState<string[]>();
  const [contextNames, setContextNames] = useState<string[]>();

  const getGPTParameters = async () => {
    try {
      const data = await axios.get("/api/playground");

      setModels(data.data.models);
      setContextNames(data.data.contextNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGPTParameters();
  }, [output]);
  return (
    <>
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Configuration</DrawerTitle>
            <DrawerDescription>
              Configure the settings for the model and messages.
            </DrawerDescription>
          </DrawerHeader>
          <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Settings
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="model">Model</Label>
                <Select
                  onValueChange={(e) =>
                    setGPTCredentials({ ...gptCredentials, model: e })
                  }
                >
                  <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent className="max-w-min">
                    {models?.map((data, i) => {
                      return (
                        <SelectItem value={data} key={i}>
                          {data}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="temperature">Temperature</Label>
                  <span className="text-muted-foreground text-xs">
                    {gptCredentials.temperature}
                  </span>
                </div>
                <Slider
                  id="temperature"
                  max={1}
                  step={0.01}
                  value={[gptCredentials.temperature]}
                  onValueChange={(e) =>
                    setGPTCredentials({
                      ...gptCredentials,
                      temperature: e[0],
                    })
                  }
                  className="
                [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="max-tokens">Max Tokens</Label>
                  <span className="text-muted-foreground text-xs">
                    {gptCredentials.maxTokens}
                  </span>
                </div>
                <Slider
                  id="max-tokens"
                  max={256}
                  step={1}
                  value={[gptCredentials.maxTokens]}
                  onValueChange={(e) =>
                    setGPTCredentials({ ...gptCredentials, maxTokens: e[0] })
                  }
                  className="
                [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Messages
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="role">Role</Label>
                <Select
                  defaultValue="system"
                  onValueChange={(e) =>
                    setGPTCredentials({ ...gptCredentials, contextName: e })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {contextNames?.map((data, i) => {
                      return (
                        <SelectItem value={data} key={i}>
                          {data}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="You are a..."
                  value={gptCredentials.input}
                  onChange={(e) =>
                    setGPTCredentials({
                      ...gptCredentials,
                      input: e.target.value,
                    })
                  }
                />
              </div>
            </fieldset>
          </form>
        </DrawerContent>
      </Drawer>
      <div className="grid h-screen w-full pl-[56px] sticky top-0">
        <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-[0.470rem]">
            <Button variant="outline" size="icon" aria-label="Home">
              <Triangle className="size-5 fill-foreground" />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg bg-muted"
                    aria-label="Playground"
                  >
                    <SquareTerminal className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Playground
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Models"
                  >
                    <Bot className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Models
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="API"
                  >
                    <Code2 className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  API
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Documentation"
                  >
                    <Book className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Documentation
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Settings"
                  >
                    <Settings2 className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Help"
                  >
                    <LifeBuoy className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Help
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Account"
                  >
                    <SquareUser className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Account
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <div className="flex flex-col">
          <header className="sticky top-0 right-0 left-0 z-10 flex h-14 items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Playground</h1>
            <Button
              onClick={() => setOpenDrawer(true)}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Settings className="size-4" />
              <span className="sr-only">Settings</span>
            </Button>

            <div className="ml-auto flex gap-5 items-center">
              <ThemeButton />
              <Button variant="outline" size="sm" className="gap-1.5 text-sm">
                <Share className="size-3.5" />
                Share
              </Button>
            </div>
          </header>
          {children}
        </div>
      </div>
    </>
  );
}
