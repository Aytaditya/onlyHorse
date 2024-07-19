import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CoverImage from "./CoverImage"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserProfile = () => {
  const isSubscribed = false;
  return (
    <div className="flex flex-col ">
      <CoverImage/>
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Avatar className="w-20 h-20 border-2 -mt-10">
            <AvatarImage src={"/user-placeholder.png"}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        <div className="flex">
          {!isSubscribed && (
            <Button asChild className="rounded-full flex gap-10">
                <Link href={"/pricing"}>
                <span className="uppercase font-semibold tracking-wide">Subscribe</span>
                </Link>
            </Button>
          )}
           {isSubscribed && (
            <Button  className="rounded-full flex gap-10" variant={"outline"}>
                <span className="uppercase font-semibold tracking-wide">Subscribed</span>
            </Button>
          )}
        </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfile
