"use client";

import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { useEffect } from "react";
import { toast } from "sonner";
import { setError, setMessage } from "@/store/reducers/service/reducer";

export const Notifications = () => {
  const dispatch = useAppDispatch();

  const message = useAppSelector((state) => state.service.message);
  const error = useAppSelector((state) => state.service.error);

  useEffect(() => {
    if (message) {
      toast.info(message);
      dispatch(setMessage(null));
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(setError(null));
    }
  }, [message]);

  return <></>;
};
