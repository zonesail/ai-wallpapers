import { Wallpaper } from "@/types/wallpaper";

async function getData(): Promise<Wallpaper[]> {
  const result = await fetch("http://localhost:3000/api/get-wallpapers");
  console.log("result:" + result);
  const { data } = await result.json();
  return data;
}

export default async function () {
  const data = await getData();
  return (
    <section className=" mx-auto">
      <div className="flex">
        {data.map((v: Wallpaper, idx: number) => {
          return (
            <div key={idx}>
              <h2 className="h-10">{v.img_description} </h2>
              <img
                className="h-200 mx-auto"
                src={v.img_url}
                alt={v.img_description}
              ></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}
