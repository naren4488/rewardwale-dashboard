import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-6">
      <NavBar />
      <Separator />
      <p>Hello world</p>
    </div>
  );
}
