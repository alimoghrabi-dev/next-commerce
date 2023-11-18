"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const CartButton = () => {
  const { handleCartClick } = useShoppingCart();

  return (
    <Button
      onClick={() => handleCartClick()}
      variant={"outline"}
      className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
      <ShoppingBag />
    </Button>
  );
};

export default CartButton;
