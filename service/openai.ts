import OpenAI from 'openai';

export function getOpenaiClient():OpenAI {
    const openai = new OpenAI({
        baseURL: "https://api.grok-bot.org/v1/",
        apiKey: process.env.OPENAI_KEY, // This is the default and can be omitted
    });

    return openai;
}
