"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

const ShoppingCartModel = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckOutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();

      if (result?.error)
        console.log("Something went wrong: ", result?.error.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-2xl py-12 font-semibold mt-20 text-gray-800 text-center">
                  Your shopping cart is empty.
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((item) => (
                    <li key={item.id} className="flex py-6 px-2.5">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image as string}
                          alt={item.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="line-clamp-1 font-semibold">
                              {item.name}
                            </h3>
                            <p>${item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {item.discription}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-600 font-medium">
                            Quantity : {item.quantity}
                          </p>
                          <div className="flex">
                            <button
                              onClick={() => {
                                removeItem(item.id);
                              }}
                              type="button"
                              className="font-medium text-primary hover:text-primary/80 transition-all">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-md text-gray-900">
              <p>Subtotal :</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <Button
                className="w-full"
                disabled={cartCount === 0}
                onClick={handleCheckOutClick}>
                Checkout
              </Button>
            </div>
            <div className="mt-5 flex justify-center text-sm text-center text-gray-500">
              <p className="font-medium">
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80 transition-all">
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModel;
