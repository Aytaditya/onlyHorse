import HeroSection from "./HeroSection"
import UnderlinedText from "@/components/decorators/UnderlinedText"

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
          Today&apos;s <UnderlinedText className="underline-offset-[15px] decoration-wavy">
              Highlight
            </UnderlinedText>
            <span className="text-2xl md:text-4xl ml-1">😈</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default AuthScreen
