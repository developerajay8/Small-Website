import ProductCard from "./ProductCard"

const data = [
    {
        id: 0, img: "/product__5.webp", name: "Dried mango", price: "$400"
    },
    {
        id: 1, img: "/product__2.webp", name: "Crunchy Crisps", price: "$300"
    },
    {
        id: 2, img: "/product__3.webp", name: "jewel Cranberries", price: "$200"
    },
    {
        id: 3, img: "/product__4.webp", name: "Almond organic", price: "$100"
    }
]

const FeaturesSectionBreakfast = () => {
    return (
        <div className="md:px-[70px] sm:px-[30px] px-[14px] pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
                    <p className="text-gray-600 mt-2">Buy best quality breakfast online from big-basket stop near you.</p>
                </div>

                <div className="space-x-4 mt:8 lg:mt-0">
                    <button className="bg-accent text-white px-4 py-1 rounded-full">Eggs & Dairy</button>
                    <button className="text-gray-600 hover:text-accent duration-700">Pizza</button>
                    <button className="text-gray-600 hover:text-accent duration-700">Snacks</button>
                </div>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src="/feature__2.webp" alt="banner" />
                </div>

                {
                    data.map(
                        (cl)=> <ProductCard key={cl.id} img={cl.img} name={cl.name} price={cl.price}/>
                    )
                }
            </div>

        </div>
    )
}

export default FeaturesSectionBreakfast
