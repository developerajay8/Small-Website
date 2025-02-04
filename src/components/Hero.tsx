import { GoArrowRight } from "react-icons/go";
const Hero = () => {
  return (
    <div className=" md:px-[70px] sm:px-[30px] px-[14px] pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img className="w-full h-full object-cover rounded-lg" src="/hero__1.webp" alt="hero image" />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Dried Fruits Best Quality</h2>
                <p className="text-gray-500 text-xl pt-4sm:pt-8">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4 ">
                    $18.36
                </div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer duration-700">Shop Now <GoArrowRight className="text-xl" /></div>
            </div>
        </div>

        <div className="relative ">
            <img className="w-full h-full object-cover rounded-lg" src="/hero__2.webp" alt="hero image" />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block font-medium">Best Yummy Pizza</p>
                <p className="text-gray-500 text-xl pt-4sm:pt-8">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4 ">
                    $25
                </div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer duration-700">Shop Now <GoArrowRight className="text-xl" /></div>
            </div>
        </div>
        <div className="relative ">
            <img className="w-full h-full object-cover rounded-lg" src="/hero__3.webp" alt="hero image" />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block font-medium">Best Yummy Chips</p>
                <p className="text-gray-500 text-xl pt-4sm:pt-8">Starting At</p>
                <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4 ">
                    $10
                </div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer duration-700">Shop Now <GoArrowRight className="text-xl" /></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
