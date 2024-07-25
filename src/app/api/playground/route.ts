import { NextRequest, NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function GET() {
  return NextResponse.json({
    models: [
      "llama-3.1-70b-versatile",
      "llama3-groq-70b-8192-tool-use-preview",
      "llama3-groq-8b-8192-tool-use-preview",
      "llama3-70b-8192",
      "llama3-8b-8192",
      "mixtral-8x7b-32768",
      "gemma-7b-it",
      "gemma2-9b-it",
    ],
    contextNames: [
      "ai",
      "assistant",
      "system",
      // "user",
    ],
  });
}

export async function POST(req: NextRequest) {
  const { model, maxTokens, contextName, context, input, temperature } =
    await req.json();
  //   Models
  /*
    2. llama-3.1-70b-versatile
    3. llama3-groq-70b-8192-tool-use-preview
    4. llama3-groq-8b-8192-tool-use-preview
    5. llama3-70b-8192
    6. llama3-8b-8192
    7. mixtral-8x7b-32768
    8. gemma-7b-it
    9. gemma2-9b-it
*/
  //   Context Names
  /*
    1. ai
    2. assistant
    3. function
    4. generic
    5. human
    6. placeholder
    7. remove
    8. system
    9. tool
    10. user
*/
  const groqModel = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    temperature: temperature === "" ? undefined : Number(temperature),
    model: model === "" ? undefined : model,
    maxTokens: maxTokens === "" ? undefined : Number(maxTokens),
  });
  const prompt = ChatPromptTemplate.fromMessages([
    [contextName ?? "system", context ?? "You are a helpful assistant"],
    ["human", "{input}"],
  ]);
  const chain = prompt.pipe(groqModel);

  const response = await chain.invoke({
    input,
  });

  return NextResponse.json({ response });
}
