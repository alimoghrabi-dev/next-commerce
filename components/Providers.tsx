"use client";

import { CartProvider } from "use-shopping-cart";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      successUrl="https://next-commerce-one-ivory.vercel.app/stripe/success"
      cancelUrl="https://next-commerce-one-ivory.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US">
      {children}
    </CartProvider>
  );
};

export default Provider;
