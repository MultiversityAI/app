export let assistantId = "asst_oadYa0m0nJYuTXyAPswMZhy0"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
