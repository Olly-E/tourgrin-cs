import Image from "next/image";
import { Button } from "./components/elements/Button";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center w-screen justify-center">
      <div className="text-white w-[300px] flex flex-col items-center space-y-6">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={165}
          height={40}
          className="h-[20px] sm:h-[30px] w-[100px] sm:w-[165px]"
        />
        <p className="">You're Lost</p>
        <Button
          type="button"
          as="link"
          href="/"
          className="bg-[#CDEA89] hidden text-[#052E16] h-[40px] sm:flex items-center"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
