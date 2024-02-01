import Input from "@/components/input";

export default function () {
  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-start px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="lg:max-w-[80%]">
          <h1 className="mb-5 text-primary text-4xl font-semibold md:text-8xl lg:mb-8">
            AI 壁纸生成器{" "}
            <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
              AIGC
            </span>
          </h1>
          <p className="mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
            帮你生成超好看的壁纸
          </p>
        </div>
      </div>
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt=""
        className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
      />
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt=""
        className="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden"
      />
      <Input />
    </section>
  );
}
