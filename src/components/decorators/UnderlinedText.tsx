import { cn } from "@/lib/utils"
import { ReactNode } from "react"


const UnderlinedText = ({className,children}:{className?:string,children:ReactNode}) => {
  return (
    <span className={cn("underline underline-offset-4 decoration-dashed decoration-sky-400",className)}>
      {children}
    </span>
  )
}

export default UnderlinedText
