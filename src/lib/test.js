const { ChatGroq } = require("@langchain/groq");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");

const model = new ChatGroq({
  apiKey:
    process.env.GROQ_API_KEY ||
    "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",
});
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  ["human", "{input}"],
]);
const outputParser = new StringOutputParser();
const chain = prompt.pipe(model).pipe(outputParser);

const getGPT = async () => {
  const response = await chain.stream({
    input: "Hello",
  });
  let res = "";
  for await (const item of response) {
    res += item;
    console.log("stream:", res);
  }
};

getGPT();
