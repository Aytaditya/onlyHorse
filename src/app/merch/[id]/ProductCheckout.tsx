"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ZoomedImage from "@/components/ZoomedImage"
import { useState } from "react"


const ProductCheckout = ({product}:{product:any}) => {
    const [selectedSize,setSelectedSize]=useState<string |null>(null)
  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      <ZoomedImage imgSrc={product.image}  />

      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold">
            {product.name}
        </h1>

        <p className="text-muted-foreground text-base">
            {product.price}
        </p>
        <Label className="mt-5 inline-block">Select Size</Label>

        <Select>
            <SelectTrigger className="w-[180px] focus:ring-0">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
        </Select>

        <Button className="mt-5 text-white py-5 rounded-md" size={"sm"}>
            Buy Now
        </Button>
      </div>
    </div>
  )
}

export default ProductCheckout
