import { stats } from "../constants";

// Stats component
function Stats() {
  return (
    // Section containing the stats
    <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
      {/* Iterate over each stat and render a div */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3"
        >
          {/* Display the stat value */}
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          {/* Display the stat title */}
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
