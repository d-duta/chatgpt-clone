const { Configuration, OpenAIApi } = require('openai');
const apiKey = "sk-proj-jwYV4hS81YyTet5lSL9KT3BlbkFJ5U8VOZ7pDQvFKvl6OJmM";
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return response.data.choices[0].text;
}
