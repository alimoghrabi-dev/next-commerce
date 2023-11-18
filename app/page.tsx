import Hero from "@/components/Hero";
import Newest from "@/components/Newest";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </main>
  );
}
