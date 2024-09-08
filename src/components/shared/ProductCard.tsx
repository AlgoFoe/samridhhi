import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  productId:string
  name: string; 
  seller: number; 
  imgUrl: string; 
  price: number; 
  description: string;
  category: string; 
  sold: boolean; 
  farmerName: string;
  avgRating: number; 
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  seller,
  imgUrl,
  price,
//   description,
//   category,
  sold,
  farmerName,
  avgRating,
}) => {
    console.log(seller);
  return (
    <Card className="w-full md:w-80 max-md:flex max-md:items-center max-md:rounded-none">
      <CardHeader className="max-md:w-44 max-md:p-3">
        <div className="w-full h-40 max-md:rounded-lg md:rounded-t-lg bg-gray-300">
          <Image
            src={imgUrl}
            alt={name}
            width={140}
            height={140}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </CardHeader>
      <div className="max-md:flex max-md:flex-col max-md:justify-center">
        <CardContent className="max-md:pt-6 max-md:pl-0">
          <div className="md:mt-[-10px] max-md:mt-0">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-sm text-gray-400 flex items-center">
              {farmerName}
              <span className="flex items-center ml-2">
                {avgRating} 
                <FaStar size={12} className="ml-0.5 mb-0.5 text-yellow-500" />
              </span>
            </p>
          </div>
          <div className="mt-2 max-md:mb-[-10px]">
            <p className="flex items-center font-medium text-xl">
              <IndianRupee size={20} className="mr-[-3px]" />
              {price}
            </p>
            {/* <p className="text-sm">Category: {category}</p> */}
            <p className="text-sm pl-1">{sold ? "Sold Out" : "Available"}</p>
            {/* <p className="text-sm">{description}</p> */}
          </div>
        </CardContent>
        <CardFooter className="max-md:flex max-md:items-start max-md:pr-0 max-md:pl-0 max-md:pt-0">
          <Button className="w-full font-semibold" disabled={sold}>
            <ShoppingCart className="mr-2 h-4 w-4" /> {sold ? "Sold Out" : "Add to cart"}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
