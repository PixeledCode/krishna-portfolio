import React from "react";
import { ArrowIcon } from "./assets/ArrowIcon";
import { Card } from "./components/Card";
import { motion } from "framer-motion";
import { getDocument } from "./client";
import { Homepage } from "./types/homepage";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <a
      href={href}
      className="hover:text-primary transition-colors duration-200 font-semibold link"
    >
      {children}
      <span className="link_underline" />
    </a>
  );
};

const textMotion = {
  rest: {
    opacity: 0,
    x: "-2%",
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

function App() {
  const [data, setData] = React.useState<Homepage>();

  React.useEffect(() => {
    async function fetchData() {
      const data = await getDocument();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <nav className="container py-8 flex justify-between items-center gap-2 font-lato">
        <motion.a
          initial="rest"
          whileHover="hover"
          className="flex items-center font-semibold text-2xl"
          href="/"
        >
          <span className="block w-4 h-4 rounded-full bg-primary mr-1" />
          <div className="bg-bg">K</div>
          <motion.span variants={textMotion} className="hidden sm:block">
            rishna Sukumaran
          </motion.span>
        </motion.a>

        <ul className="flex gap-4 sm:gap-10 sm:text-xl">
          <Link href="#projects">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
        </ul>
      </nav>

      <main>
        <div className="relative pb-32 sm:pb-72 cursor pt-16 sm:pt-36">
          <div className="max-w-240 container">
            <h1 className="text-xl sm:text-7xl font-display sm:leading-display">
              Hi, I’m Krishna, <br />
              <span className="outline-text">
                Digital Product Designer <br />
              </span>
              based in{" "}
              <span className="hover:text-primary transition-colors duration-200">
                Bangalore.
              </span>
            </h1>
            <p className="mt-3 sm:text-xl whitespace-pre-line">
              {data?.headingText}
            </p>
          </div>
          <a href="#projects" className="hidden sm:block">
            <img
              src="/src/assets/krishna.png"
              alt=""
              width={300}
              className="absolute right-7 -bottom-8"
            />
          </a>
        </div>
        <div className="bg-light pt-16 sm:pt-24 pb-24 sm:pb-44">
          <div className="max-w-240 container">
            <h2
              className="text-3xl sm:text-5xl font-display leading-display pt-20 -mt-20"
              id="projects"
            >
              {data?.projectTitle}
            </h2>
            <p className="sm:text-xl whitespace-pre-line">
              {data?.projectText}
            </p>
            <div className="mt-8 sm:mt-16 grid gap-6 auto-fit-[320px]">
              {data?.projectCards &&
                data.projectCards.map((card) => (
                  <Card
                    key={card._key}
                    brand={card.brand}
                    title={card.title}
                    image={card.image}
                    tags={card.tags}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark pt-8 sm:pt-16 pb-6 text-text-on-bg whitespace-pre-line">
        <div className="container">
          <div className="flex justify-end overflow-hidden">
            <motion.button
              className="flex items-center gap-3"
              initial={{
                x: 90,
              }}
              whileHover={{
                x: 0,
              }}
              transition={{
                duration: 0.4,
                type: "tween",
                ease: "easeOut",
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="p-2 rounded-full bg-bg w-fit">
                <ArrowIcon />
              </span>
              Back to top
            </motion.button>
          </div>
          <div className="flex items-center gap-4 justify-between mt-12">
            <div>
              <p className="font-display leading-display text-lg sm:text-3xl">
                {data?.footerText}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-center mt-9 sm:text-xl">
                <a href={data?.linkedIn}>LinkedIn</a>
                <span className="h-[18px] w-0.5 bg-bg hidden sm:block" />
                <a href={`emailto:${data?.email}`}>{data?.email}</a>
              </div>
            </div>
            <img
              src="/src/assets/cup.gif"
              alt=""
              className="w-32 hidden sm:block"
            />
          </div>
          <p className="mt-12 sm:mt-24 text-sm">&#169; {data?.credits}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
