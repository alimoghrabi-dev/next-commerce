import { Button } from "@/components/ui/button";
import { CheckCheck, Heart } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-500 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-700 my-2 flex items-center justify-center flex-col gap-1.5 text-base font-medium">
            Thank you for your purchase.
            <Heart className="w-6 h-6 text-red-600 animate-ping duration-700 mt-2" />
          </p>
          <Button asChild className="mt-7 text-center">
            <Link href={"/"}>Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
