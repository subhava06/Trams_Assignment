function Newsletter() {
  return (
    <section className="bg-[#EAF4E6] py-24">
      <div className="section-container text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Subscribe to our newsletter
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Get the latest updates, insights and creative ideas directly
          in your inbox.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-full border border-gray-300 flex-1 outline-none"
          />

          <button className="bg-black text-white px-8 py-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;