"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRef, useState } from "react"

type run={
    x:number,
    y:number
}
                                        // classname is optional 
const ZoomedImage = ({className,imgSrc}:{className?:string,imgSrc:string}) => { 

    const [mousePosition,setMousePosition]=useState<run>({x:0,y:0});
    

    const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>)=>{
       
          const rect=(e.target as HTMLDivElement).getBoundingClientRect()
          // getBoundingClientRect gives us left,top,width,height of the element
  
           const x=((e.clientX-rect.left)/rect.width)*100 //for pixels multiply 100
            const y=((e.clientY-rect.top)/rect.height)*100
  
            setMousePosition({x,y})
      
    }

  return (
    // first one is default and second one is anything we want to change
    <div className={cn("w-full relative overflow-hidden h-96",className)}>
      <Image src={imgSrc} alt="image" fill style={{transformOrigin:`${mousePosition.x} ${mousePosition.y}`}}
      className="transition-transform duration-500 ease-in-out transform hover:scale-[2.5] cursor-pointer rounded-md" onMouseMove={(e)=>handleMouseMove(e)} />
    </div>
  )
}

export default ZoomedImage
