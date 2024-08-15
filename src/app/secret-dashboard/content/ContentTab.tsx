"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ReactNode, useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CldUploadWidget, CldVideoPlayer, CloudinaryUploadWidgetInfo } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, TriangleAlert } from "lucide-react"


const ContentTab = () => {
    const [text, setText] = useState("");
    const [mediaType, setMediaType] = useState<"image" | "video">("video");
    const [isPublic, setIsPublic] = useState(false);
    const [mediaUrl, setMediaUrl] = useState("");
    return (
        <>
            <p className="text-3xl my-5 font-bold text-center uppercase">
                Share Post
            </p>

            <form>
                <Card className="w-full ma-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">New Post</CardTitle>
                        <CardDescription>Share your exclusive content with audience. Select only one video/image at a time.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 ">
                        {/* label/section to add text area for post */}
                        <div className="grid gap-2 mb-4">
                            <Label htmlFor="content">Content</Label>
                            <Textarea id="content" placeholder="Share today's exclusive" required
                                onChange={(e: any) => { setText(e.target.value) }} />
                        </div>

                        <Label>Media Type</Label>
                        <RadioGroup defaultValue="video"
                            value={mediaType}
                            onValueChange={(value: "image" | "video") => setMediaType(value)}
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

                        {/* to upload image using cloudinary */}
                        <CldUploadWidget signatureEndpoint="/api/sign-cloudinary-params"
                            onSuccess={(result, { widget }) => {
                                setMediaUrl((result.info as CloudinaryUploadWidgetInfo).secure_url);
                                widget.close();
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <Button onClick={() => open()}
                                        variant={"outline"} type="button">
                                        Upload an Image
                                    </Button>
                                );
                            }}
                        </CldUploadWidget>

                        {/* now we will show image preview */}
                        {mediaUrl && mediaType === "image" && (
                            <div className="flex justify-center relative w-full h-96">
                                <Image fill src={mediaUrl} alt="media url"
                                    className="object-contain rounded-md" />
                            </div>
                        )}

                        {/* video preview */}
                        {mediaUrl && mediaType === 'video' && (
                            <div className="w-full mx-auto">
                                <CldVideoPlayer width={960} height={540} className="rounded-md" src={mediaUrl} />
                            </div>
                        )}

                        {/* public or subscribed post checkbox */}
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="public"
                                checked={isPublic}
                                onCheckedChange={(e) => setIsPublic(e as boolean)} />

                            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="public">Mark as public</Label>
                        </div>


                        {/* warning */}
                        <Alert variant={"default"} className="text-yellow-400">
                            <TriangleAlert className="h-4 w-4 !text-yellow-400" />
                            <AlertTitle>Warning</AlertTitle>
                            <AlertDescription>
                                Public post will be visible to all users.
                            </AlertDescription>
                        </Alert>

                    </CardContent>

                    {/* submit button now */}
                    <CardFooter>
                        <Button type="submit" className="w-full">Create a Post</Button>
                    </CardFooter>
                </Card>
            </form>

        </>
    )
}

export default ContentTab
