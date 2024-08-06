import { IndianRupee } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import ZoomedImage from "./ZoomedImage"
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


const ProductCard = ({product}:{product:any}) => {

    const adminView=false;
  return (
    <Card className="flex flex-col ">
      <CardHeader className="px-2 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
        {product.name}
        </CardTitle>
        <div>
        <IndianRupee className="inline h-4 w-4 text-muted-foreground"/>
        <span>{product.price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-10 ">
        <ZoomedImage imgSrc={product.image} className="h-72"/>
        <div className="flex justify-center mt-auto">
        {adminView && (
            <Button className="w-full" variant={"outline"}>
                Archieve
            </Button>
        )}
        {!adminView && (
            // color in coming because of button variant
            <Link className={cn("w-full",buttonVariants())} href={`/merch/${product.id}`}>
                Add to Cart
            </Link>
        )}
        </div>
      </CardContent>

    </Card>
  )
}

export default ProductCard
