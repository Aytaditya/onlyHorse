'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CldUploadWidget } from 'next-cloudinary'
import React from 'react'
import Image from 'next/image'

const StoreTab = () => {
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('');
  const [mediaUrl, setMediaUrl] = React.useState('');
  return (
    <>
      <p className='text-3xl my-5 font-bold text-center uppercase'>Add New Product </p>

      <form>
        <Card className='w-full max-w-md mx-auto'>
          <CardHeader>
            <CardTitle className='text-2xl'>New Merch</CardTitle>
            <CardDescription>Add a new product to your store. Select only one image</CardDescription>
          </CardHeader>

          <CardContent className='grid gap-4'>

            {/* name input field */}
            <div className='mb-1'>
              {/* by making htmlFor and id same, we can click on label to focus on input field */}
              <Label htmlFor='name' className='mb-[5px]'>Name</Label>
              <Input id="name" type='text' placeholder='onlyHorse Special' required
                value={name} onChange={(e: any) => setName(e.target.value)} />
            </div>

            {/* price input field */}
            <div>
              <Label htmlFor='price' className='mb-[5px]'>Price</Label>
              <Input id="price" type='text' placeholder='1699' required
                value={price} onChange={(e: any) => setName(e.target.value)} />
            </div>

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

            {mediaUrl && (
              <div className="flex justify-center relative w-full h-96">
                <Image fill src={mediaUrl} alt="media url"
                  className="object-contain rounded-md" />
              </div>
            )}



          </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full">Add a Product</Button>
            </CardFooter>
        </Card>
      </form>

    </>
  )
}

export default StoreTab
