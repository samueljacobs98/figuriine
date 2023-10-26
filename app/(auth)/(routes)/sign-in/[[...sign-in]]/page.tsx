"use client";
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const direct = searchParams.get("direct");

  return (
    <div className="flex flex-col items-center gap-2">
      {!direct && (
        <div className=" w-full px-8">
          <p className="bg-white p-2 shadow-xl text-center rounded-md border-2 border-dashed border-yellow-300">
            Please sign in to start building!
          </p>
        </div>
      )}
      <SignIn />
    </div>
  );
};

export default Page;
