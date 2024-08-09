"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ReactNode, useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const ContentTab = () => {
    const [text, setText] = useState("");
    const [mediaType, setMediaType] = useState<"image"|"video">("video");
    const [isPublic, setIsPublic] = useState(false);
    return (
        <>
            <p className="text-3xl my-5 font-bold text-center uppercase">
                Share Post
            </p>

            <form>
                <Card className="w-full ma-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">New Post</CardTitle>
                        <CardDescription>Share your exclusive content with audience. Select only one video/image at a time</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* label/section to add text area for post */}
                        <div className="grid gap-2 mb-4">
                            <Label htmlFor="content">Content</Label>
                            <Textarea id="content" placeholder="Share today's exclusive" required
                                onChange={(e: any) => { setText(e.target.value) }} />
                        </div>

                        <Label>Media Type</Label>
                        <RadioGroup defaultValue="video" 
                        value={mediaType}
                        onValueChange={(value:"image" |"video") => setMediaType(value)}
                        className="mt-1 flex space-x-1"
                         >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="video" id="video" />
                                <Label htmlFor="video">Video</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="image" id="image" />
                                <Label htmlFor="image">Image</Label>
                            </div>
                        </RadioGroup>


                    </CardContent>
                </Card>
            </form>

        </>
    )
}

export default ContentTab
