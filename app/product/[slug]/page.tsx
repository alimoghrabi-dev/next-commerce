import AddToCart from "@/components/AddToCart";
import CheckOut from "@/components/CheckOut";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        name,
        discription,
        images,
        price,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
    }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Gallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100 font-medium">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 font-medium line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck />
              <span className="text-sm">2-4 Day Shopping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToCart
                currency="USD"
                image={data.images[0]}
                price={data.price}
                name={data.name}
                discription={data.discription}
                price_id={data.price_id}
                key={data._id}
              />
              <CheckOut
                currency="USD"
                image={data.images[0]}
                price={data.price}
                name={data.name}
                discription={data.discription}
                price_id={data.price_id}
                key={data._id}
              />
            </div>
            <p className="mt-10 text-base text-gray-700 tracking-wide">
              {data.discription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
