function HeroSection() {
    return (
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 pt-32 md:pt-40">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
            Understanding and Improving Mental Health
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            SafeSpace connects you with AI therapists for anonymous, real-time support. Track your emotional well-being and access personalized tools for better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition">
              Book a Consultation
            </button>
            <button className="border-2 border-purple-700 text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition flex items-center gap-2">
              Learn More <span>&#x2193;</span>
            </button>
          </div>
        </div>
  
        {/* Right Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <img
            src={heroImage}
            alt="Mental health support"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }
  
  export default HeroSection;