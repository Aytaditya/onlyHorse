
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import Sidebar from './Sidebar'
import SuggestedProducts from './SuggestedProducts'

// by default render right pannel of merch products true until passed that value is false and add question mark to make it optional
const BaseLayout = async ({ children, renderRightPannel = true }: { children: ReactNode, renderRightPannel?: boolean }) => {

    const { isAuthenticated } = getKindeServerSession()

    // any page that uses this baseLayout requires authentication

    if (!(await isAuthenticated())) {
        return redirect("/");
    }


    // basically base layout has 3 parts=> sidebar that is for every component and then children what we will pass and then suggested prodcut page thet will be present in page when a true is passed as prop
    return (
        <div className='flex max-w-2xl lg:max-w-7xl mx-auto relative'>

			<Sidebar />

			<div className='w-full lg:w-3/5 flex flex-col border-r'>{children}</div>
			{renderRightPannel && (
                <SuggestedProducts/>
            )}
		</div>
    )
}

export default BaseLayout
