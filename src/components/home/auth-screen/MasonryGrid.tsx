"use client"
import Image from "next/image"
import { useState } from "react"

const MasonryGrid = () => {
  const [hoverIndex,setHoverIndex]=useState<number | null>(null)
  const [mousePosition,setMousePosition]=useState<{x:number,y:number}>({x:0,y:0})


  const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>,i:number)=>{
      if(hoverIndex===i){
        const rect=(e.target as HTMLDivElement).getBoundingClientRect()
        // getBoundingClientRect gives us left,top,width,height of the element

         const x=((e.clientX-rect.left)/rect.width)*100 //for pixels multiply 100
          const y=((e.clientY-rect.top)/rect.height)*100

          setMousePosition({x,y})
      }
  }
  return (
    <div className="p-5 sm:p-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 [&>div:not(:first-child)]:mt-8">
          {/* will give margin top of 8 to all divs except the first one */}
        {[...Array(15)].map((_,i)=>(
            <div key={i} className="relative 
            overflow-hidden rounded-md" onMouseEnter={()=>setHoverIndex(i)}
              onMouseLeave={()=>setHoverIndex(null)}
              onMouseMove={(e)=>handleMouseMove(e,i)}
            >
              <Image
              src={`/featured/featured${i+1}.jpg`}
              width={500}
              height={500}
              className="cursor-pointer hover:scale-150 transition-transsform duration-500 ease-in-out"
              style={{transformOrigin:`${mousePosition.x}% ${mousePosition.y}%`}}
              alt="featured post"
              />
            </div>
        ))}
      </div>
    </div>
  )
}

export default MasonryGrid
