import BaseLayout from "@/components/BaseLayout"
import UserProfile from "./UserProfile"

const HomeScreen = () => {
  return (
    <BaseLayout renderRightPannel={true}>
     <UserProfile/>

    </BaseLayout>
  )
}

export default HomeScreen
