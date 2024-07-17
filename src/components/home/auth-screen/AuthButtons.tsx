"use client"
import { Button } from "@/components/ui/button"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs"
import { useState } from "react"

const AuthButtons = () => {
  const [loading,setLoading]=useState(false)
  return (
    <div className="flex gap-3 flex-1 md:flex-row flex-col">
      <RegisterLink className="flex-1">
      <Button className="w-full" variant={"outline"} 
      onClick={()=>setLoading(true)} disabled={loading}>Sign Up</Button>
      </RegisterLink>
      <LoginLink className="flex-1">
      <Button className="w-full"
      onClick={()=>setLoading(true)} disabled={loading}>Log In</Button>
      </LoginLink>
      
    </div>
  )
}

export default AuthButtons
