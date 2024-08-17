"use client";
import {
  BotMessageSquare,
  CornerDownLeft,
  Mic,
  Paperclip,
  SquareUser,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GPTContext, GPTCredentialsProps } from "@/context/gpt-context";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import Markdown from "react-markdown";

export default function Dashboard() {
  const {
    gptCredentials,
    setGPTCredentials,
  }: { gptCredentials: GPTCredentialsProps; setGPTCredentials: Function } =
    useContext(GPTContext);

  const searchParams = useSearchParams();
  const [models, setModels] = useState<string[]>();
  const [contextNames, setContextNames] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [messagesArr, setMessagesArr] = useState([
    { type: "ai", data: "Hello, how can I help you today?" },
  ]);

  const getGPTParameters = async () => {
    try {
      const data = await axios.get("/api/playground");

      setModels(data.data.models);
      setContextNames(data.data.contextNames);
    } catch (error) {
      console.log(error);
    }
  };

  const sendGPTData = async () => {
    setMessagesArr([
      ...messagesArr,
      { type: "human", data: gptCredentials.input },
    ]);
    setLoading(true);
    try {
      const data = await axios.post("/api/playground", {
        ...gptCredentials,
        memory: JSON.stringify(messagesArr),
      });
      setMessagesArr([
        ...messagesArr,
        { type: "human", data: gptCredentials.input },
        { type: "ai", data: data.data.response },
      ]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getGPTParameters();
    setGPTCredentials({ ...gptCredentials, input: searchParams.get("prompt") });
  }, []);

  return (
    <main className="flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 grid">
      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
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
                <SelectContent>
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
                  setGPTCredentials({ ...gptCredentials, temperature: e[0] })
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
                max={512}
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
            <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
            <div className="grid gap-3">
              <Label htmlFor="role">Role</Label>
              <Select
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
                value={gptCredentials.context}
                onChange={(e) =>
                  setGPTCredentials({
                    ...gptCredentials,
                    context: e.target.value,
                  })
                }
                className="min-h-[8.3rem]"
              />
            </div>
          </fieldset>
        </form>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Badge variant="outline" className="absolute right-3 top-3">
          Output
        </Badge>
        <div className="flex-1 py-8">
          <div className="grid grid-cols-1 gap-5">
            {messagesArr?.map((data, i) => {
              if (data.type === "ai") {
                return (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_20fr] gap-2 w-full max-w-lg"
                  >
                    <BotMessageSquare />
                    <Card className="p-3">
                      <CardContent className="p-0">
                        <Markdown>{data.data}</Markdown>
                      </CardContent>
                    </Card>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="flex justify-end">
                    <div className="grid grid-cols-[20fr_1fr] gap-2 w-full max-w-lg">
                      <Card className="p-3">
                        <CardContent className="p-0">{data.data}</CardContent>
                      </Card>
                      <SquareUser />
                    </div>
                  </div>
                );
              }
            })}
            {loading ? (
              <div className="grid grid-cols-[1fr_20fr] gap-2 w-full max-w-lg">
                <Skeleton className="h-8 w-8" />
                <Card className="p-3">
                  <CardContent className="p-0 space-y-2">
                    <Skeleton className="h-4 w-[95%]" />
                    <Skeleton className="h-4 w-[100%]" />
                    <Skeleton className="h-4 w-[88%]" />
                    <Skeleton className="h-4 w-[94%]" />
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </div>
        </div>
        <form
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            value={gptCredentials.input}
            onChange={(e) =>
              setGPTCredentials({ ...gptCredentials, input: e.target.value })
            }
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Mic className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              size="sm"
              className="ml-auto gap-1.5"
              type="button"
              onClick={() => {
                sendGPTData();
              }}
            >
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
/*

loading ? (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_20fr] gap-2 w-full max-w-lg"
                  >
                    <Skeleton className="h-8 w-8" />
                    <Card className="p-3">
                      <CardContent className="p-0 space-y-2">
                        <Skeleton className="h-4 w-[95%]" />
                        <Skeleton className="h-4 w-[100%]" />
                        <Skeleton className="h-4 w-[88%]" />
                        <Skeleton className="h-4 w-[94%]" />
                      </CardContent>
                    </Card>
                  </div>
                ) : (
*/
