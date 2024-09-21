// hah om sai ram om bhaskarayaa namaha om namaha sivayaa


import aboutImage from '../assets/About_Img.jpg'; // Replace with the actual image in your assets folder

const AboutSection = () => {
  return (
    <section className="bg-tertiary py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-azure text-[28px] font-bold font-montserrat mb-8 text-center">
          About
        </h2>

        <div className="flex justify-between items-center">
          {/* First Half - Image */}
          <div className="w-[40%] flex justify-center">
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-auto rounded-full  transition duration-300 ease-in-out hover:border-none hover:shadow-3xl"
                style={{ width: '80%', aspectRatio: '1.5/1' }} // Creates the rectangular shape
              />
            </div>
          </div>

          {/* Second Half - Text and CTA Button */}
          <div className="w-[50%]">
            <p className="text-black text-[18px] font-montserrat mb-8">
            <span className='text-[24px] font-bold'>Q</span>uick Commerce has revolutionized shopping, but it has also led to an increase in unhealthy choices due to its convenience and focus on speed. </p>
            <p className="text-black text-[18px] font-montserrat mb-8">
            <span className='text-[24px] font-bold'>Q</span>uickpik aims to bridge the gap between quick commerce and healthy living, empowering users to make informed and healthy choices. <span className='text-azure text-[22px] font-bold'>With Quickpik, we aim to make India Healthy Again.</span>
            </p>

            {/* CTA Button */}
            <button className="bg-azure text-[#FFF] text-[20px] font-semibold font-montserrat py-2 px-6 rounded hover:bg-saffron bg-opacity-80 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
