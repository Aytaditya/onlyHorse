import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {MarqueeDemo} from "./Marquee"
import RotatedText from "@/components/decorators/RotatedText";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Expert Horse Care Tips",
		description:
			"Learn the best practices for keeping your horses healthy and happy. From nutrition advice to grooming.",
		image: "/gifs/gif1.gif",
	},
	{
		title: "Riding Techniques",
		description:
			"Enhance your riding skills with our detailed tutorials. Whether you're into dressage, jumping, or just casual riding, find techniques in seconds.",
		image: "/gifs/gif2.gif",
	},
	{
		title: "Daily Farm Life",
		description: "See how we care for our horses, manage the farm, and enjoy the beauty of nature.",
		image: "/gifs/gif3.gif",
	},
];

const featureList: string[] = [
	"Horse Health Insights",
	"Daily Tips",
	"Behind-the-Scenes Access",
	"Training Tutorials",
	"Riding Techniques",
	"Horse Care Advice",
];

function Features() {
  return (
    <>
    <section className="container py-24 sm:py-32 space-y-8">
     <h2 className="text-3xl lg:text-5xl font-bold md:text-center">Many <UnderlinedText className="underline-offset-8 md:underline-offset-[13px] decoration-wavy">OnlyHorse</UnderlinedText> Features 🐎</h2>

      {/* badges */}
     <div className="flex flex-wrap md:justify-center gap-4 ">
      {featureList.map(feature=>(
        <div key={feature}>
            <Badge className="text-sm mt-4 rounded-full" variant={"secondary"}>{feature}</Badge>
        </div>
      ))}
     </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature=>(
        <Card key={feature.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {feature.description}
            </CardContent>
            <CardFooter className="mt-auto">
              <img src={feature.image} alt={feature.title} className="rounded w-[250px] h-32 lg:w-[300px] mx-auto select-none pointer-events-none"/>
            </CardFooter>
        </Card>
      ))}

     </div>
    </section>


    <div className="mt-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-center tracking-tighter font-bold">
      Why <RotatedText>Choose</RotatedText> Us? 🤔
    </h1>
      <p className="mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center">
        Hear from our happy customers and see why they love our services.
      </p>
      <MarqueeDemo/>
   </div>
   </>
  )
}

export default Features
