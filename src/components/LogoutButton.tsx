"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth.actions";
import { redirect, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogOut, LogOutIcon } from "lucide-react";
import { toast } from "sonner";
import { useTransition } from "react";

export const LogoutButton = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const clickHandler = async () => {
    startTransition(() => {
      logout().then((res) => {
        toast.info("Вы вышли из аккаунта!", {});
      });
    });
  };

  return (
    <Button disabled={isPending} onClick={clickHandler} size={"icon"}>
      <LogOut />
    </Button>
  );
};
