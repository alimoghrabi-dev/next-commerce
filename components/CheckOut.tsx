"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/lib/sanity";
import { productCart } from "./AddToCart";

const CheckOut = ({
  name,
  discription,
  price,
  currency,
  image,
  price_id,
}: productCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name,
    discription,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button variant={"secondary"} onClick={() => buyNow(product.price_id)}>
      Checkout Now
    </Button>
  );
};

export default CheckOut;
