import { motion } from "framer-motion";
import { Image } from "../types/homepage";
import { urlFor } from "../client";

export const Card = ({
  brand,
  title,
  image,
  alt = "",
  tags,
}: {
  brand: string;
  title: string;
  image: Image;
  alt?: string;
  tags?: string[];
}) => {
  return (
    <article className="mb-4 sm:mb-8">
      <motion.img
        src={urlFor(image.asset._ref).url()}
        alt={alt}
        whileHover={{
          scale: 0.98,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <h3 className="font-semibold uppercase mt-6 tracking-wide">{brand}</h3>
      <p className="mt-1 sm:mt-3 font-display leading-display text-xl sm:text-2xl">
        {title}
      </p>
      {tags ? (
        <div className="mt-6 flex gap-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-3xl text-sm border border-solid border-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};
