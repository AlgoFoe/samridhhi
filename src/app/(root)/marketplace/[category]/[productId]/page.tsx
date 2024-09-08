"use client"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Ratings } from "@/components/ratingComponent";
import { IoBag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { ProductCard } from "@/components/productCard";
import Image from "next/image"
import { useState } from "react";

export default function Component() {

    const imgs = [
        "/images/products/img1.jpg",
        "/images/products/img2.jpg",
        "/images/products/img3.jpg",
    ]

    const [image, setImage] = useState<string>(imgs[0])

    const changeImage = (img: string) => {
        setImage(img)
    }

    return (
        <div className="w-[98vw] px-2 md:px-6 py-12 overflow-auto">
            <div className="grid md:grid-cols-11 gap-8">
                <div className="col-span-6 flex flex-col-reverse md:flex-row max-h-[500px] overflow-x-auto no-scrollbar">
                    <div className="w-full md:w-20 h-24 md:h-full mr-3 flex md:flex-col overflow-auto no-scrollbar">
                        {
                            imgs.map(img => {
                                return (
                                    <div className="md:w-full aspect-square rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none cursor-pointer" onClick={() => changeImage(img)}>
                                        <Image src={img} alt="" width={140} height={140} className="w-full h-full object-contain" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="max-md:mb-3 w-full md:col-span-5 max-md:h-96 overflow-x-auto">
                        <Image src={image} alt="" width={140} height={140} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full grid col-span-5 gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold">Paddy</h1>
                        <p className="text-foreground font-semibold">Nagpur</p>
                        <p className="text-muted-foreground">Priyanshu Dixit</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-0.5">
                            <Ratings />
                        </div>
                        <span className="text-muted-foreground">4.3 (123 reviews)</span>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <span className="text-4xl font-bold">₹99.99</span>
                        <div className="w-full flex max-md:flex-col">
                            <Button size="xl" className="w-1/3 md:mr-3 max-md:mb-3 max-md:w-full">
                                <FaShoppingCart className="mr-2 h-4 w-4" />Add to cart
                            </Button>
                            <Button size="xl" className="w-1/3 max-md:w-full" variant="secondary">
                                <IoBag className="mr-2 h-4 w-4" />Buy Now
                            </Button>
                        </div>
                    </div>
                    <div>
                        <p className="text-muted-foreground">
                            Paddy, or rice, is a staple food crop grown extensively in many parts of the world, particularly in Asia. It thrives in warm, humid climates with abundant water supply, often cultivated in flooded fields known as paddies. Paddy plants have long, slender stems and grow in dense clusters, producing grains that are harvested, husked, and processed to produce the rice consumed globally. The cultivation of paddy plays a crucial role in food security and the economies of many countries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Crop Grade</span>
                            <span>A</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Quantity</span>
                            <span>100kg</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Fertilizers Used</span>
                            <span>ABC</span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Sown Month</span>
                            <span>January</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Land Size</span>
                            <span>1 Acre</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Harvesting Month</span>
                            <span>March</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Related Products</h2>
                <div className="flex overflow-x-auto gap-x-10 no-scrollbar max-md:w-full">
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                    <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" className="flex-none" />
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <div className="grid gap-6">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="w-full grid gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-0.5 text-sm">
                                    <h3 className="font-semibold">Sarah Johnson</h3>
                                    <time className="text-muted-foreground">2 days ago</time>
                                </div>
                                <div className="flex items-center gap-0.5 ml-auto">
                                    <Ratings />
                                </div>
                            </div>
                            <div className="text-sm leading-loose text-muted-foreground">
                                <p>
                                    Mary's commitment to organic farming and her passion for community education make her a true leader in sustainable agriculture.Mary's commitment to organic farming and her passion for community education make her a true leader in sustainable agriculture.Mary's commitment to organic farming and her passion for community education make her a true leader in sustainable agriculture.Mary's commitment to organic farming and her passion for community education make her a true leader in sustainable agriculture.Mary's commitment to organic farming and her passion for community education make her a true leader in sustainable agriculture.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="w-full grid gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-0.5 text-sm">
                                    <h3 className="font-semibold">Alex Smith</h3>
                                    <time className="text-muted-foreground">3 weeks ago</time>
                                </div>
                                <div className="flex items-center gap-0.5 ml-auto">
                                    <Ratings />
                                </div>
                            </div>
                            <div className="text-sm leading-loose text-muted-foreground">
                                <p>
                                    John is a dedicated farmer whose innovative techniques have transformed his small plot into a thriving, sustainable farm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}