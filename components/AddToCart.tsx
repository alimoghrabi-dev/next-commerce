"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/lib/sanity";

export interface productCart {
  name: string;
  discription: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

const AddToCart = ({
  name,
  discription,
  price,
  currency,
  image,
  price_id,
}: productCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name,
    discription,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
