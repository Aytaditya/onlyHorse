import BaseLayout from "@/components/BaseLayout"
import ProductCard from "@/components/ProductCard"
import { products } from "@/dummy_data"
import ProductCheckout from "./ProductCheckout"

const Page=({params}:{params:{id:string}})=>{
    return <BaseLayout renderRightPannel={false}>
        <div className="px-3 md:px-7 my-20">

            <ProductCheckout product={products[0]}/>

            <h1 className="text-3xl text-center mt-20 mb-10 font-bold tracking-tight">
                More products from onlyHorse
            </h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {products.map((products)=>
                    (
                    <ProductCard key={products.id} product={products} />
                )
                )}
            </div>
        </div>
        </BaseLayout>
}

export default Page