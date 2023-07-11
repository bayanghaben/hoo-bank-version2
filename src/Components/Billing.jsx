import { apple, google, bill } from "../assets";

function Billing() {
  return (
    // Render a billing section
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
    >
      {/* Display the main image with overlay elements */}
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src={bill} // Set the source of the main image
          className="w-full h-full relative z-50" // Apply styles to the image
        />
        {/* Add a white gradient overlay */}
        <div className="absolute z-30 -left-1/2 top-0 h-[50%] w-[50%] rounded-full white__gradient " />
        {/* Add a pink gradient overlay */}
        <div className="absolute z-0 -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full pink__gradient " />
      </div>
      {/* Display the text content and additional images */}
      <div className="flex-1 flex justify-center items-start flex-col">
        {/* Display the main heading */}
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        {/* Display the supporting paragraph */}
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        {/* Display images of Apple and Google logos */}
        <div className="flex flex-row fler-warp sm:mt-10 mt-6">
          <img
            src={apple} // Set the source of the Apple logo
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" // Apply styles to the image
          />
          <img
            src={google} // Set the source of the Google logo
            className="w-[128px] h-[42px] object-contain cursor-pointer" // Apply styles to the image
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
