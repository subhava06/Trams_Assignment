import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden">
      <div className="section-container">

        {/* BLOCK 1 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-font text-[42px] md:text-[58px] leading-tight font-semibold">
              <span className="yellow-underline">
                Tomorrow
              </span>{" "}
              should
              <br />
              be better than{" "}
              <span className="highlight-green">
                today
              </span>
            </h2>

            <p className="text-gray-600 mt-8 max-w-md leading-8">
              We are a team of strategists, designers,
              communicators and researchers. Together,
              we believe progress only happens when
              you refuse to play things safe.
            </p>

            <button className="mt-8 flex items-center gap-3 group">
              <span>Read more</span>

              <span className="group-hover:translate-x-2 transition">
                →
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* pink glow */}

            <div className="absolute w-[420px] h-[420px] bg-pink-100 rounded-full blur-[90px] opacity-50"></div>

            {/* red shape */}

            <div className="absolute top-4 right-10 w-32 h-32 bg-red-300 rotate-12"></div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
              alt=""
              className="relative z-10 w-[420px] h-[420px] object-cover rounded-full shadow-soft"
            />
          </motion.div>
        </div>

        {/* CURVED CONNECTOR */}

        <div className="hidden lg:flex justify-center py-10">
          <svg
            width="900"
            height="180"
            viewBox="0 0 900 180"
          >
            <path
              d="M10 90
              C180 0,
              280 180,
              450 90
              S720 0,
              890 90"
              fill="none"
              stroke="#ef7b7b"
              strokeWidth="3"
            />

            <path
              d="M10 100
              C180 10,
              280 190,
              450 100
              S720 10,
              890 100"
              fill="none"
              stroke="#f4c3c3"
              strokeWidth="8"
              opacity=".2"
            />
          </svg>
        </div>

        {/* BLOCK 2 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="absolute -top-10 -left-5 w-0 h-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-red-300 rotate-[-10deg]"></div>

            <div className="absolute -bottom-14 right-20 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[110px] border-l-transparent border-r-transparent border-b-red-300 rotate-[15deg]"></div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt=""
              className="w-[420px] h-[420px] rounded-full object-cover relative z-10 shadow-soft"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <h2 className="heading-font text-[42px] md:text-[58px] leading-tight font-semibold">
              <span className="highlight-green">
                See
              </span>{" "}
              how we can
              <br />
              help you{" "}
              <span className="yellow-underline">
                progress
              </span>
            </h2>

            <p className="text-gray-600 mt-8 max-w-md leading-8">
              We add a layer of fearless insights and
              action that allows change makers to
              accelerate their progress in areas
              such as brand, design, digital,
              communications and social research.
            </p>

            <button className="mt-8 flex items-center gap-3 group">
              <span>Read more</span>

              <span className="group-hover:translate-x-2 transition">
                →
              </span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;