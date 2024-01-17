"use client";

import { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import FormikInput from "@/components/FormikInput";
import { Button } from "@/components/ui/button";
import { registration } from "@/actions/auth.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { generate } from "generate-password-ts";

interface Props {}

export const Form: FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={async (values, { setFieldError, resetForm }) => {
        if (!values.name || !values.password) {
          if (!values.name) {
            setFieldError("name", "Обязательное поле");
          }
          if (!values.password) {
            setFieldError("password", "Обязательное поле");
          }
          return;
        }
        const res = await registration({
          login: values.name,
          password: values.password,
        });
        if (res) {
          toast.success("Вы успешно зарегистрировались!", {});
          resetForm();
          router.push("/login");
        } else {
          toast.error("Ошибка!", {});
        }
      }}
    >
      {({ values, errors, setFieldValue }) => (
        <FormikForm className="flex flex-col items-center gap-5">
          <FormikInput name="name" placeholder="Имя" />
          {errors.name && (
            <h2 className="text-lg text-red-400">{errors.name}</h2>
          )}
          <FormikInput name="password" placeholder="Пароль" type="password" />
          {errors.password && (
            <h2 className="text-lg text-red-400">{errors.password}</h2>
          )}
          <Button
            type="button"
            variant="outline"
            className="w-full lg:w-[40%]"
            onClick={async () => {
              const password = generate({
                length: 10,
                strict: true,
              });
              await setFieldValue("password", password);
              await navigator.clipboard.writeText(password);
              toast.success("Пароль скопирован в буфер обмена");
            }}
          >
            Сгенерировать пароль
          </Button>
          <Button className="w-full lg:w-[40%]" type={"submit"}>
            Зарегистрироваться
          </Button>
          <h4 className="text-sm">
            Уже есть аккаунт?{" "}
            <Link className="text-destructive" href={"/login"}>
              Войдите
            </Link>
          </h4>
        </FormikForm>
      )}
    </Formik>
  );
};
