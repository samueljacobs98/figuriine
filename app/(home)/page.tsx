import HeroText from "@/components/HeroText";
import Image from "next/image";
import src from "@/assets/images/lego-figurines.png";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center lg:justify-items-center p-12 md:px-24 lg:pt-32 lg:grid md:grid-cols-2">
      <div className="container flex flex-col gap-4 md:gap-8 lg:gap-12 w-fit">
        <HeroText />
        <div className="flex gap-2 justify-between items-center border-y-2 py-2 border-y-bg-lego-sand uppercase">
          <div>
            create your
            <br />
            <b>figurine!</b>
          </div>
          <Link href="build">
            <button className=" bg-slate-200 px-6 py-7 rounded-lg shadow-md hover:shadow-xl hover:cursor-pointer hover:text-slate-500 hover:bg-slate-300">
              <p className="uppercase font-bold">get started</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full aspect-square max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl -mt-10 sm:-mt-12 lg:mt-0">
        <Image
          alt="Lego figurines shadow"
          layout="fill"
          objectFit="contain"
          src={src}
          className="absolute inset-0 filter blur-lg brightness-75 transform scale-x-90 -translate-y-2"
        />
        <Image
          alt="Lego figurines"
          layout="fill"
          objectFit="contain"
          src={src}
        />
      </div>
    </main>
  );
};

export default Home;
