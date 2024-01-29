import { Wallpaper } from "@/types/wallpaper"

export function GET(req:Request) {
    const wallpapers: Wallpaper[] = [
        {
            img_description: "desc 1",
            img_url: "https://th.bing.com/th/id/R.a6c393866c4688548880c807f9757597?rik=6gbQCFW5MKWEsg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180812%2f2f4e50e0c18245c48f466115d383bb3e.jpeg&ehk=Pf08eKafmaErqOAm%2fDfjGrzevEemJ2w7cKvIJMTjufc%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            img_description: "desc 2",
            img_url: "https://th.bing.com/th/id/R.a6c393866c4688548880c807f9757597?rik=6gbQCFW5MKWEsg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180812%2f2f4e50e0c18245c48f466115d383bb3e.jpeg&ehk=Pf08eKafmaErqOAm%2fDfjGrzevEemJ2w7cKvIJMTjufc%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            img_description: "desc 3",
            img_url: "https://th.bing.com/th/id/R.a6c393866c4688548880c807f9757597?rik=6gbQCFW5MKWEsg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180812%2f2f4e50e0c18245c48f466115d383bb3e.jpeg&ehk=Pf08eKafmaErqOAm%2fDfjGrzevEemJ2w7cKvIJMTjufc%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            img_description: "desc 4",
            img_url: "https://th.bing.com/th/id/R.a6c393866c4688548880c807f9757597?rik=6gbQCFW5MKWEsg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180812%2f2f4e50e0c18245c48f466115d383bb3e.jpeg&ehk=Pf08eKafmaErqOAm%2fDfjGrzevEemJ2w7cKvIJMTjufc%3d&risl=&pid=ImgRaw&r=0",
        },
    ];
    return Response.json({
        code: 0,
        message: "ok",
        data: wallpapers
    })
}