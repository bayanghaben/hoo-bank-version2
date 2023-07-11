import Reviews from "./Reviews";

// Testimonials component
function Testimonials() {
  return (
    // Section containing client testimonials
    <section id="clients">
      {/* Container for the heading */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        {/* Heading */}
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          What People are
          <br className="sm:block hidden" />
          saying about us
        </h2>
        {/* Description */}
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Render the Reviews component */}
      <Reviews />
    </section>
  );
}

export default Testimonials;
