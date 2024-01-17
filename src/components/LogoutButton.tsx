"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth.actions";
import { redirect, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogOut, LogOutIcon } from "lucide-react";
import { toast } from "sonner";

export const LogoutButton = () => {
  const router = useRouter();
  const clickHandler = async () => {
    await logout();
    //router.push("/")
    toast.info("Вы вышли из аккаунта!", {});
  };

  return (
    <Button onClick={clickHandler} size={"icon"}>
      <LogOut />
    </Button>
  );
};
