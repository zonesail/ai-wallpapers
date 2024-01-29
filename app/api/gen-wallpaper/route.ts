import { getOpenaiClient } from "@/service/openai";

export async function POST(req:Request) {
    const {description} = await req.json();
    
    const client = getOpenaiClient();

    const result = await client.images.generate({
        prompt: "generate a desktop wallpaper about: ${description}",
        model: "dall-e-3",
        size: "1024x1024",
        quality: "hd",
    });
    

    return Response.json({
        code: 0,
        message: "OK",
        data:{
            img_url:result.data[0].url,
            img_description: description,
        }
    })
}