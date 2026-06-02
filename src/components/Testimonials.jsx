import { motion } from "framer-motion";

const avatars = [
  {
    img: "https://i.pravatar.cc/150?img=1",
    className: "top-0 left-10 w-20 h-20",
  },
  {
    img: "https://i.pravatar.cc/150?img=8",
    className: "top-32 left-0 w-14 h-14",
  },
  {
    img: "https://i.pravatar.cc/150?img=12",
    className: "top-48 left-20 w-32 h-32",
  },
  {
    img: "https://i.pravatar.cc/150?img=20",
    className: "top-10 right-10 w-24 h-24",
  },
  {
    img: "https://i.pravatar.cc/150?img=30",
    className: "top-40 right-0 w-20 h-20",
  },
  {
    img: "https://i.pravatar.cc/150?img=40",
    className: "bottom-0 right-20 w-40 h-40",
  },
];

function Testimonials() {
  return (
    <section className="py-28 lg:py-36 relative">
      <div className="section-container">

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="heading-font text-[46px] md:text-[72px] leading-none font-semibold">
            <span className="highlight-green">
              What
            </span>{" "}
            our customer
            <br />
            says{" "}
            <span className="yellow-underline">
              About Us
            </span>
          </h2>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">

          {/* Floating Avatars */}

          {avatars.map((avatar, index) => (
            <motion.img
              key={index}
              src={avatar.img}
              alt=""
              className={`avatar absolute hidden lg:block ${avatar.className}`}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="
            bg-[#edf5ee]
            rounded-[40px]
            max-w-2xl
            p-10
            md:p-14
            relative
            shadow-soft
            "
          >
            <div className="absolute left-8 top-4 text-[90px] text-gray-300">
              "
            </div>

            <p className="text-center text-lg md:text-xl leading-10 text-gray-700">
              Elementum delivered the site within
              the timeline as requested. In the end,
              the client found a 50% increase in traffic
              within days since its launch. They also had
              an impressive ability to use technologies
              that the company hadn't used before, which
              proved to be easy to use and reliable.
            </p>

            <div className="absolute right-8 bottom-0 text-[90px] text-gray-300">
              "
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;