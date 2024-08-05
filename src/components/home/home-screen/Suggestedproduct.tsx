import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ZoomedImage from "@/components/ZoomedImage"
import { cn } from "@/lib/utils"
import { IndianRupee } from "lucide-react"
import Link from "next/link"


const Suggestedproduct = ({product}:{product:any}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="px-2 flex flex-row items-center justify-between space-y-0 pb-0">
      <CardTitle className="text-sm font-medium">
        {/* text-ellipses does if it gets larger than this it will put 3 dots automatic */}
        <p className="w-28 text-ellipsis overflow-hidden text-nowrap">{product.name}</p>
      </CardTitle>

      <div>
        <IndianRupee className="inline h-4 w-4 text-muted-foreground"/>
        <span className="text-sm">{product.price}</span>
      </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 gap-2 p-2 items-center ">
        {/* <img src={product.image} alt="Product images" className="w-32 object-cover" /> */}
        <ZoomedImage imgSrc={product.image} className="h-40 "/>
        <div className="flex justify-center mt-auto ">
          <Link href={`/merch/${product.id}`} className={cn("w-full",buttonVariants({size:"sm"}))}>
          Click to Buy
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default Suggestedproduct
