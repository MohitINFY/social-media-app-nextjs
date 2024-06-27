import Link from "next/link";
import Mobilemenu from "./Mobilemenu";
import Image from "next/image"; // Import the Image component from the appropriate library

export const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[30%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          My App
        </Link>
      </div>
      <div className="hidden md:flex w-[50%]">
        <div className="flex gap-6">
          <Link href="/" className="text-blue-600 flex items-center gap-2">
            <Image src="/home.png" alt="Home" width={16} height={16} />
            <span>Home</span>
          </Link>
          <Link href="/" className="text-blue-600 flex items-center gap-2">
            <Image src="/friends.png" alt="Friends" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="text-blue-600 flex items-center gap-2">
            <Image src="/stories.png" alt="Stories" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-end gap-3 w-[30%]">
        <Mobilemenu />
      </div>
    </div>
  );
};
