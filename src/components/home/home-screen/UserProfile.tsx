import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CoverImage from "./CoverImage"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { admin,user } from "@/dummy_data";

const UserProfile = () => {
  
  return (
    <div className="flex flex-col ">
      <CoverImage/>
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Avatar className="w-20 h-20 border-2 -mt-10">
            <AvatarImage src={admin.image||"/user-placeholder.png"}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        <div className="flex">
          {!user.isSubscribed && (
            <Button asChild className="rounded-full flex gap-10">
                <Link href={"/pricing"}>
                <span className="uppercase font-semibold tracking-wide">Subscribe</span>
                </Link>
            </Button>
          )}
           {user.isSubscribed && (
            <Button  className="rounded-full flex gap-10" variant={"secondary"}>
                <span className="uppercase font-semibold tracking-wide">Subscribed</span>
            </Button>
          )}
        </div>
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-lg font-seminbold">{admin.name}</p>
          <p className="text-sm mt-2 md:text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam reiciendis, corrupti minima molestias aperiam error. Quas nam voluptatibus magni id rerum aut quibusdam fugit</p>
        </div>

      </div>
      <div aria-hidden="true" className="h-2 w-full bg-muted"/>
    </div>
  )
}

export default UserProfile
