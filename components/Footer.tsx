import src from "@/assets/images/lego-logo.jpeg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative text-slate-200 w-full bottom-0 px-2 py-4 bg-lego-red text-center">
      <a
        href="https://github.com/samueljacobs98/figuriine"
        target="_blank"
        rel="noopener noreferrer"
      >
        by Samuel Jacobs
      </a>
      <div className="absolute -top-20 right-4 w-16 h-16">
        <a
          href="https://www.lego.com/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="Lego logo" layout="fill" objectFit="contain" src={src} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
