import BaseLayout from "@/components/BaseLayout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContentTab from "./content/ContentTab"
import StoreTab from "./store/StoreTab"



// this page will only be seen by admins
const Page = () => {
    return (
        <BaseLayout renderRightPannel={false}>


            <Tabs defaultValue="content" className="w-full mx-auto my-10 px-2 md:px-10">
                <TabsList className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto h-auto">
                    <TabsTrigger value="content" className="w-full md:w-auto">
                        Content
                    </TabsTrigger>
                    <TabsTrigger value="store" className="w-full md:w-auto">
                        Store
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="w-full md:w-auto">
                        Analytics
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="content">
                    {/* content tab addition form here */}
                    <ContentTab/>
                </TabsContent>
                <TabsContent value="store">
                    {/* store content yaha hain */}
                    <StoreTab/>
                </TabsContent>
                <TabsContent value="analytics">analytics here</TabsContent>
            </Tabs>

        </BaseLayout>
    )
}

export default Page
