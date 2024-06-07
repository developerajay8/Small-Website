
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";

import FeatureCard from "./FeatureCard";


const data=[
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid/>
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid/>
    },
    {
        title: "Support 25/7",
        icon: <FiPhoneCall/>
    },
]


const FeaturesSec = () => {
  return (
    <div className="container pt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            data.map(
                (xl)=> <FeatureCard key={xl.title} title={xl.title} icon={xl.icon}/>
            )
        }
      </div>
    </div>
  )
}

export default FeaturesSec
