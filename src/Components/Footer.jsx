import { logo } from "../assets"; // Importing the 'logo' asset
import { footerLinks, socialMedia } from "../constants"; // Importing 'footerLinks' and 'socialMedia' from 'constants'

function Footer() {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />{" "}
          {/* Displaying the 'logo' image */}
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>{" "}
          {/* Displaying the paragraph text */}
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>{" "}
              {/* Displaying the footer link title */}
              <ul className="list-none mt-4 space-y-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </li> /* Displaying each footer link */
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>{" "}
        {/* Displaying the copyright text */}
        <div className="flex  flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              //to not give the last index margin right
              onClick={() => window.open(social.link)}
            />
            /* Displaying each social media icon */
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer; // Exporting the Footer component
