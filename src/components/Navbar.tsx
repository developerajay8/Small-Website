import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import CartCount from "./CartCount";

const Navbar = () => {
    return (
        <div className="md:px-[70px] sm:px-[30px] px-[14px] hidden lg:block">
            <div className="flex justify-between items-center pt-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input className="w-full bg-[#f2f3f5] py-3 px-6 outline-none border-none rounded-[30px]" type="text" placeholder="Search Product..." />
                    <IoSearchOutline className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
                </div>
                <div className="flex gap-4">
                    <div className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center">
                        <FaRegUser />
                    </div>
                    <div className="relative border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center">
                    <FaCartShopping />
                    <CartCount size="w-[25px] h-[25px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
