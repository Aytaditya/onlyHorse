import PostSkeleton from '@/components/skeletons/PostSkeleton';
import React from 'react'
import {posts,admin,user} from "@/dummy_data"
import Post from './Post';


const Posts = () => {
    const isLoading=false;

  return (
    <div>

      {!isLoading && posts.map((post,index)=>(
        <Post key={index} post={post} admin={admin} isSubscribed={user.isSubscribed}  />
      ))}

        {isLoading&& (
            <div className='mt-10 px-3 flex flex-col gap-10'>
                {/* mapping an array by spreading an array of 3 items */}
             {[...Array(3)].map((_,index)=>(
                <PostSkeleton key={index}/>
             ))}
            </div>
        )}

      {!isLoading && posts.length===0 &&(
        <div className='mt-10 px-3'>
            <div className='flex flex-col items-center space-y-3 w-full '>
                <p className='text-xl font-semibold'>
                    No Posts Yet
                </p>
                <p className='text-center'>
                    Stay tuned for more posts from <span className='text-primary font-semibold text-xl'>OnlyHorse</span>. 
                </p>
            </div>
        </div>
      )}
    
    </div>
  )
}

export default Posts

