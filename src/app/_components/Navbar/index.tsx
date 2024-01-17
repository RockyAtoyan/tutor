import { auth } from "@/lib/services/service.auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";
import { LogIn } from "lucide-react";

export const Navbar = async () => {
  const user = await auth();

  return (
    <header className="fixed z-40 top-[20px] right-[20px] flex items-center gap-2">
      {user ? (
        <>
          <Image
            src={user.image || "/user.png"}
            alt={"user"}
            width={500}
            height={500}
            className="w-[40px] h-[40px] object-cover object-center rounded-full"
          />
          <div>
            <LogoutButton />
          </div>
        </>
      ) : (
        <>
          <Button asChild>
            <Link href={"/login"}>
              <LogIn />
            </Link>
          </Button>
        </>
      )}
    </header>
  );
};
