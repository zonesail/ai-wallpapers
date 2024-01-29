export default function () {
  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-start px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="lg:max-w-[80%]">
          <h1 className="mb-5 text-4xl font-semibold md:text-8xl lg:mb-8">
            The Website You Want Without The{" "}
            <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
              Dev Time
            </span>
            .
          </h1>
          <p className="mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
        </div>
        <div className="flex">
          <a
            href="#"
            className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
          >
            Get Started
          </a>
          <a
            href="#"
            className="flex flex-row items-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]"
          >
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
              alt=""
              className="mr-2 inline-block w-6"
            />
            <p className="text-black">View Showreel</p>
          </a>
        </div>
        <a
          href="#"
          className="relative bottom-0 left-auto right-0 top-auto mt-20 inline-block h-[480px] w-full font-bold text-[#1353fe] lg:absolute lg:h-64 lg:w-64"
        >
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390645323b5307a9e8e2aaa_Rectangle%20777.png"
            alt=""
            className="relative bottom-0 left-auto right-0 top-auto inline-block h-full w-full -rotate-3 rounded-xl object-cover lg:-rotate-6"
          />
          <div className="absolute inset-0 z-10 h-full -rotate-6 rounded-xl bg-[#00000033] lg:-rotate-3"></div>
          <div className="absolute inset-0 -z-10 h-full rounded-2xl bg-black"></div>
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63914ea79e127d1bd7939a6a_Play.svg"
            alt=""
            className="absolute bottom-1/2 left-1/2 right-auto top-auto z-10 inline-block -translate-x-1/2 translate-y-1/2"
          />
        </a>
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
    </section>
  );
}
