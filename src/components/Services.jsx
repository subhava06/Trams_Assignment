import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const services = [
  {
    description: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    description: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    description: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

function Services() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">

        {/* Decorative curve */}

        <svg
          className="absolute right-0 top-10 hidden lg:block"
          width="600"
          height="180"
          viewBox="0 0 600 180"
        >
          <path
            d="M0 120
            C120 180,
            160 0,
            280 70
            S520 180,
            600 40"
            fill="none"
            stroke="#ef7b7b"
            strokeWidth="3"
          />

          <path
            d="M0 125
            C120 185,
            160 5,
            280 75
            S520 185,
            600 45"
            fill="none"
            stroke="#f4c3c3"
            strokeWidth="10"
            opacity=".25"
          />
        </svg>

        {/* Heading */}

        <div className="mb-20">
          <h2 className="heading-font text-[48px] md:text-[72px] leading-none font-semibold max-w-3xl">
            What we{" "}
            <span className="highlight-green">
              can
            </span>
            <br />
            <span className="yellow-underline">
              offer
            </span>{" "}
            you!
          </h2>
        </div>

        {/* Services */}

        <div className="border-t border-gray-300">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="service-row border-b border-gray-300 py-10 lg:py-12 px-3 rounded-xl"
            >
              <div className="grid lg:grid-cols-[220px_1fr_80px] gap-6 items-center">

                {/* Left description */}

                <div>
                  <p className="text-gray-600 text-sm leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Title */}

                <div>
                  <h3 className="heading-font text-[34px] md:text-[48px] lg:text-[58px] leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}

                <div className="flex justify-start lg:justify-end">
                  <button
                    className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-gray-300
                    flex
                    items-center
                    justify-center
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    <HiOutlineArrowRight size={24} />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Decorative circle similar to figma */}

        <div className="hidden lg:flex justify-center mt-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-green-400 opacity-80"></div>
        </div>

      </div>
    </section>
  );
}

export default Services;