import OpenAI from 'openai';

export function getOpenaiClient():OpenAI {
    const openai = new OpenAI({
        baseURL: "https://api.grok-bot.org/v1/",
        apiKey: "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", // This is the default and can be omitted
    });

    return openai;
}
