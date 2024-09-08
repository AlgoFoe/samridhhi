import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/productCard";

export default function Component() {
  return (
    <div className="grid md:grid-cols-[1fr_280px] gap-4 px-4 md:px-6 py-12">
      <div className="grid gap-4">
        <div className="grid gap-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <p className="text-muted-foreground">Review the items in your cart and proceed to checkout.</p>
        </div>
        <div className="flex flex-wrap gap-7">
          {/* Product Cards */}
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
          <ProductCard avgRating={4.5} farmerName="Priyanshu Dixit" name="Paddy" price={1000} imgUrl="" isRemovable/>
        </div>
      </div>
      {/* Align the Order Summary to the top */}
      <div className="p-6 rounded-lg shadow-xl grid gap-4 self-start">
        <div className="grid gap-2">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="flex items-center justify-between">
            <span>Total Items</span>
            <span className="font-medium">3</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-medium">$274.97</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span className="font-medium">$9.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="font-medium text-green-500">-$20.00</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-medium text-lg">
            <span>Total</span>
            <span>$264.96</span>
          </div>
        </div>
        <Button size="lg" className="w-full" variant="secondary">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}