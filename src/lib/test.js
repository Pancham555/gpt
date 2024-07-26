// const { ChatGroq } = require("@langchain/groq");
// const {
//   ChatPromptTemplate,
//   MessagesPlaceholder,
// } = require("@langchain/core/prompts");
// const { AIMessage, HumanMessage } = require("@langchain/core/messages");

// const groqModel = new ChatGroq({
//   apiKey:
//     process.env.GROQ_API_KEY
// });

// const prompt = ChatPromptTemplate.fromMessages([
//   ["system", "You are a helpful assistant"],
//   new MessagesPlaceholder("messages"),
// ]);

// const chain = prompt.pipe(groqModel);

// const arr = [
//   { type: "human", data: "this is something" },
//   { type: "ai", data: "I write something!" },
// ];

// const newArr = [];

// arr.forEach((element) => {
//   if (element.type === "ai") {
//     newArr.push(new AIMessage(element.data));
//   } else {
//     newArr.push(new HumanMessage(element.data));
//   }
// });

// console.log(newArr, "New Arr");

// const getData = async () => {
//   const response = await chain.invoke({
//     messages: [
//       new HumanMessage("Write me a good tweet"),
//       new AIMessage(
//         '"Embrace every opportunity to learn and grow. Remember, every expert was once a beginner. Keep pushing your boundaries and you\'ll be amazed at what you can achieve. #neverstopelearning #personalgrowth"'
//       ),
//       new HumanMessage("Write me the hashtag you just gave."),
//     ],
//   });
//   console.log(response);
// };

// getData();
