import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "product"] {
      _id,
        "imageUrl":images[0].asset->url,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name
    }`;

  const data = await client.fetch(query);

  return data;
}

const Page = async () => {
  const data: simplifiedProduct = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our All Products
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative shadow-custom-2">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 transition-all lg:h-88">
                <Image
                  src={product.imageUrl}
                  alt={product.slug}
                  width={1800}
                  height={1800}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-semibold">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
