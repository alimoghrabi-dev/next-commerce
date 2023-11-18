import { Frown } from "lucide-react";

const Page = () => {
  return (
    <div>
      <h2 className="py-10 flex items-center justify-center gap-2.5 text-2xl font-semibold text-gray-900">
        Something went wrong...
        <Frown className="text-gray-900 w-6 h-6" />
      </h2>
    </div>
  );
};

export default Page;
