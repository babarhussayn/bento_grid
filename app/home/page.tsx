import Image from "next/image";
import React, { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <div className="">
        <div className="bg-white shadow-xl rounded-lg w-full">
          <div className="grid md:w-[1200px] grid-cols-1 grid-rows-1 md:grid-cols-10 md:grid-rows-1 gap-4  h-full">
            <div className="bg-[#faeee2] p-4 col-span-1 row-span-1 md:col-span-2 md:row-span-2 rounded-md ">
              <div className="flex justify-center items-center mt-8 ">
                <div className="w-[180px]">
                  <h4 className="text-3xl font-medium">
                    Create and schedule content{" "}
                    <span className="text-[#7651dd] font-semibold ">
                      quicker
                    </span>
                    .
                  </h4>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <Image
                  src="/images/image-4.webp"
                  alt="img-1"
                  width={300}
                  height={250}
                />
              </div>
            </div>

            <div className="bg-[#7651dd] p-12 rounded-md col-span-1  md:col-span-6  ">
              <div className="flex justify-center items-center">
                <div>
                  <h4 className="text-[#fefefe] text-2xl">
                    Social Media <span className="text-[#ffcb71]">10x</span>
                  </h4>
                  <h4 className="text-[#fefefe] text-2xl">Faster with AI</h4>
                </div>
              </div>
              <div className="flex justify-center items-center mt-10">
                <Image
                  src="/images/image-5.webp"
                  alt="img-1"
                  width={300}
                  height={250}
                />
              </div>
              <div className="flex justify-center items-center mt-2">
                <h4 className="text-[#fefefe]">Over 4,000 5-star reviews</h4>
              </div>
            </div>
            <div className="bg-[#ddd1fc] p-4  rounded-2xl col-span-1 md:col-span-2 row-span-1">
              <div className="flex justify-center items-center flex-col ">
                <div className="p-2 flex justify-start items-center">
                  <h4 className="text-3xl font-semibold ">
                    Schedule to social media
                  </h4>
                </div>
                <div className="flex">
                  <Image
                    src="/images/image-7.webp"
                    alt="img-1"
                    width={300}
                    height={250}
                  />
                </div>
                <div>
                  <h4>
                    Optimize post timings to publish content at the perfect time
                    for your audience.
                  </h4>
                </div>
              </div>
            </div>

            <div className="  md:col-span-3  md:row-span-1 col-span-1 row-span-1">
              <div className="bg-[#fefefe] p-4 rounded-md shadow-2xl h-[35vh]">
                <Image
                  src="/images/image-8.webp"
                  alt="img-1"
                  width={300}
                  height={250}
                />
                <div className="mt-8 w-[75%]">
                  <div className="flex justify-center items-center">
                    <h4 className="text-2xl font-semibold">
                      Manage multiple accounts and platforms.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ffcd6a] p-4 rounded-md col-span-1 row-span-1 md:col-span-3 md:row-span-1 h-[35vh] overflow-hidden">
              <div>
                <div>
                  <h4>Maintain a consistent posting schedule.</h4>
                </div>
              </div>
              <div className="flex mt-[10rem]">
                <Image
                  src="/images/image-2.webp"
                  alt="img-1"
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <div className="bg-[#ffcd6a] p-4 rounded-md md:col-span-2 col-span-1 ">
              <div className=" w-[60%]">
                <div className="flex justify-center items-center">
                  <h4 className="text-3xl font-bold">
                    Write your content using AI.
                  </h4>
                </div>
              </div>
              <div className="mt-10">
                <Image
                  src="/images/image-1.webp"
                  alt="img-1"
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <div className="flex flex-row md:col-span-3 col-span-1 shadow-xl rounded-md md:gap-4">
              <div className="bg-[#fefefe] p-4  mt-10">
                <div>
                  <div className="flex justify-center items-center md:flex-col">
                    <h4 className="md:text-7xl font-semibold"> 56%</h4>
                    <span>faster audience growth</span>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-14">
                  <Image
                    src="/images/image-3.webp"
                    alt="img-1"
                    width={300}
                    height={250}
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#7651dd] p-4 rounded-md md:col-span-5 col-span-1 ">
              8
              <Image
                src="/images/image-6.webp"
                alt="img-1"
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

{
  /*  */
}
