import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
<<<<<<< HEAD
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
=======
    <div className="flex flex-row justify-start items-start white-glassmorphism p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 hover:border-white/20">
        <div className={`w-14 h-14 rounded-full flex justify-center items-center ${color} flex-shrink-0`}>
            {icon}
        </div>
        <div className="ml-6 flex flex-col flex-1">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white text-sm md:w-full leading-relaxed opacity-90">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services min-h-screen">
        <div className="flex mf:flex-row flex-col items-center justify-between md:px-20 md:py-32 py-20 px-4 max-w-7xl w-full">
            <div className="flex-1 flex flex-col justify-start items-start mf:mr-16">
                <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl py-4 text-gradient leading-tight">
                    Services that we
                    <br />
                    continue to improve
                </h1>
                <p className="text-left mt-8 text-white font-light md:w-9/12 w-11/12 text-lg leading-relaxed">
                    The best choice for buying and selling your crypto assets, with the
                    various super friendly services we offer
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center mf:mt-0 mt-16">
                <div className="mb-6 w-full">
                    <ServiceCard
                        color="bg-[#2952E3]"
                        title="Security gurantee"
                        icon={<BsShieldFillCheck fontSize={24} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
                <div className="mb-6 w-full">
                    <ServiceCard
                        color="bg-[#8945F8]"
                        title="Best exchange rates"
                        icon={<BiSearchAlt fontSize={24} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
                <div className="w-full">
                    <ServiceCard
                        color="bg-[#F84550]"
                        title="Fastest transactions"
                        icon={<RiHeart2Fill fontSize={24} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
            </div>
        </div>
    </div>
>>>>>>> 4c32b1d32a34cb177f494169cdc6f553004a39ff
);

export default Services;
