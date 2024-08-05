"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, ImageIcon, LockKeyholeIcon, MessageCircle, Trash } from "lucide-react"
import { user } from "@/dummy_data"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"


const Post = ({ post, isSubscribed, admin }: { post: any, isSubscribed: boolean, admin: any }) => {

  const [isLiked,setIsLiked]=useState<boolean>(false)
  return (
    <div className="flex flex-col gap-3 p-3 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={admin.image || "/user-placeholder.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="font-semibold text-sm md:text-md">{admin.name}</span>

        </div>
        <div className="flex gap-2 items-center">
          <p className="text-zinc-400 text-sm md:text-sm tracking-tighter">17.06.2024</p>

          {admin.id === user.id && (
            <Trash className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer" />
          )}
        </div>
      </div>
      <p className="text-sm md:text-md">{post.text}</p>

      {/* if user is subsrcibed for an image */}
      {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType == 'image' && (
        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
          <Image src={post.mediaUrl} alt="Post Image" className="rounded=lg object-cover" fill />
        </div>
      )}

      {/* if user is subscribed for a post */}
      {(post.isPublic || isSubscribed) && post.mediaUrl && post.mediaType == 'video' && (
        <div>

        </div>
      )}

{!isSubscribed && !post.isPublic && (
				<div
					className='w-full bg-slate-600 relative h-96 rounded-md bg-of flex flex-col justify-center
          items-center px-5 overflow-hidden
        '
				>
					<LockKeyholeIcon className='w-16 h-16 text-zinc-100 mb-20 z-0' />

					<div aria-hidden='true' className='opacity-60 absolute top-0 left-0 w-full h-full bg-stone-800' />

					<div className='flex flex-col gap-2 z-10 border p-2 border-gray-500 w-full rounded'>
						<div className='flex gap-1 items-center'>
							<ImageIcon className='w-4 h-4' />
							<span className='text-xs'>1</span>
						</div>

						<Link
							className={buttonVariants({
								className: "!rounded-full w-full font-bold text-white",
							})}
							href={"/pricing"}
						>
							Subscribe to unlock
						</Link>
					</div>
				</div>
			)}

      <div className="flex gap-4 ">


        {/* post liking system */}
        <div className="flex gap-1 items-center">

          {/* basically we passed default classes and made it red if isLiked is true using sdhadcn */}
          <Heart className={cn('w-5 h-5 cursor-pointer',{'text-red-500':isLiked,'fill-red-500':isLiked})} onClick={(e:any)=>setIsLiked(!isLiked)}/>
          <span className="text-sm text-zinc-400 tracking-tighter">55</span>
        </div>

        {/* comment system */}
      <div className="flex gap-4 ">
        <div className="flex gap-1 items-center">
          <MessageCircle className="w-5 h-5 cursor-pointer"/>
          <span className="text-sm text-zinc-400 tracking-tighter">69</span>
        </div>
      </div>
      </div>

      

    </div>
  )
}

export default Post
