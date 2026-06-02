import { motion } from "framer-motion";

const words = [
  "The",
  "thinkers",
  "and",
  "doers",
  "were",
  "changing",
  "the",
  "status",
  "Quo",
  "with",
];

const avatars = [
  {
    img: "https://i.pravatar.cc/150?img=11",
    size: "w-24 h-24",
  },
  {
    img: "https://i.pravatar.cc/150?img=15",
    size: "w-20 h-20",
  },
  {
    img: "https://i.pravatar.cc/150?img=21",
    size: "w-28 h-28",
  },
  {
    img: "https://i.pravatar.cc/150?img=30",
    size: "w-24 h-24",
  },
  {
    img: "https://i.pravatar.cc/150?img=34",
    size: "w-20 h-20",
  },
  {
    img: "https://i.pravatar.cc/150?img=40",
    size: "w-24 h-24",
  },
  {
    img: "https://i.pravatar.cc/150?img=50",
    size: "w-20 h-20",
  },
  {
    img: "https://i.pravatar.cc/150?img=55",
    size: "w-28 h-28",
  },
  {
    img: "https://i.pravatar.cc/150?img=62",
    size: "w-24 h-24",
  },
];

function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20">
      <div className="section-container">
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative SVG */}

          <svg
            className="absolute -left-10 top-6 hidden lg:block"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <path
              d="M10 60 C40 10,80 110,110 60"
              fill="none"
              stroke="#f55"
              strokeWidth="4"
            />
            <path
              d="M10 90 C40 40,80 140,110 90"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </svg>

          <h1 className="heading-font text-center leading-tight font-semibold text-[48px] sm:text-[70px] lg:text-[96px]">
            {words.map((word, index) => {
              let classes = "";

              if (word === "thinkers")
                classes = "yellow-underline";

              if (word === "changing")
                classes = "highlight-pink";

              if (word === "status")
                classes = "highlight-green";

              return (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className={`inline-block mr-4 ${classes}`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          <p className="max-w-2xl mx-auto text-center mt-10 text-gray-600">
            We build meaningful experiences,
            create innovative digital products
            and help ambitious brands grow.
          </p>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {avatars.map((avatar, index) => (
              <motion.img
                key={index}
                src={avatar.img}
                alt=""
                className={`${avatar.size} avatar`}
                initial={{
                  opacity: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;