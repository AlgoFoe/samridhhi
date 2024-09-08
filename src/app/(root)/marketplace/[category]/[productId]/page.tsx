import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Ratings } from "@/components/ratingComponent";
import { IoBag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { ProductCard } from "@/components/productCard";

export default function Component() {
    return (
        <div className="w-[98vw] px-2 md:px-6 py-12 overflow-auto">
            <div className="grid md:grid-cols-11 gap-8">
                <div className="col-span-6 flex flex-col-reverse md:flex-row max-h-[500px] overflow-x-auto">
                    <div className="w-full md:w-20 h-24 md:h-full mr-3 flex md:flex-col overflow-auto no-scrollbar">
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                        <div className="md:w-full aspect-square bg-sky-600 rounded-lg md:my-2 max-md:h-full max-md:mx-2 flex-none"></div>
                    </div>
                    <div className="max-md:mb-3 w-full md:col-span-5 max-md:h-96 bg-red-500 overflow-x-auto"></div>
                </div>
                <div className="w-full grid md:col-span-5 gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold">Acme Wireless Headphones</h1>
                        <p className="text-foreground font-semibold">Nagpur</p>
                        <p className="text-muted-foreground">High-quality audio experience</p>
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
                            Experience the ultimate in wireless audio with our Acme Headphones. Featuring advanced noise-cancelling technology, premium sound quality, and a sleek, comfortable design, these headphones are perfect for music lovers, commuters, and anyone who demands the best in portable audio.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Bluetooth Version</span>
                            <span>5.0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Battery Life</span>
                            <span>20 hours</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Charging Time</span>
                            <span>2 hours</span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Drivers</span>
                            <span>40mm Dynamic</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Frequency Response</span>
                            <span>20Hz - 20kHz</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Impedance</span>
                            <span>32 Ohms</span>
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
                        <div className="grid gap-2">
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
                                    I&APOSve been using these headphones for a few weeks now and I&APOSm really impressed with the sound quality and noise-cancelling capabilities. They&APOSre comfortable to wear for long periods and the battery life is excellent. Highly recommended!
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
                        <div className="grid gap-2">
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
                                    I recently purchased these headphones and they&APOSve been a game-changer for me. The sound quality is incredible, and the noise-cancelling feature is a lifesaver during my commute. The only downside is that they can get a bit uncomfortable after wearing them for extended periods, but overall I&APOSm very satisfied with my purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}