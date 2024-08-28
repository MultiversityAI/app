import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new assistant
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions: "You are a helpful teaching assistant.",
    name: "Teaching Assistant",
    model: "gpt-4o",
    tools: [
      { type: "code_interpreter" },
      {
        type: "function",
        function: {
          name: "get_content",
          description: "Define curriculum for students.",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "Overall subject and relevant topics.",
              },
              unit: {
                type: "string",
                enum: ["c", "f"],
              },
            },
            required: ["content"],
          },
        },
      },
      { type: "file_search" },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}
