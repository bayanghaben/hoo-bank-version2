import { arrowUp } from "../assets";

// The circle (get started) in the hero section
function GetStarted() {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23px mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img className="w-[23px] h-[23px] object-contain" src={arrowUp} />
        </div>{" "}
        {/* Text and arrow icon aligned horizontally */}
        <p className="font-poppins font-medium text-[18px] leading-[24px]">
          <span className="text-gradient">Started</span>
        </p>{" "}
      </div>
    </div>
  );
}

export default GetStarted;
