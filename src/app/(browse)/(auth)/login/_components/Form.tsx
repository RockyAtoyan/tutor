"use client";

import { FC } from "react";
import { Formik, Form as FormikForm } from "formik";
import FormikInput from "@/components/FormikInput";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/auth.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {}

export const Form: FC<Props> = ({}) => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        rememberMe: false,
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
        const res = await login({
          login: values.name,
          password: values.password,
          rememberMe: values.rememberMe,
        });
        if (res) {
          toast.success("Вы успешно вошли!", {});
          resetForm();
          router.push("/");
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
          <div className="w-[80%] flex items-center justify-between">
            <label
              htmlFor="login-remember"
              className="select-none cursor-pointer hover:underline"
            >
              Запомнить меня
            </label>
            <Checkbox
              id="login-remember"
              checked={values.rememberMe}
              onCheckedChange={async (checked) => {
                await setFieldValue("rememberMe", checked);
              }}
            />
          </div>
          <Button className="w-full lg:w-[40%]" type={"submit"}>
            Войти
          </Button>
          <h4 className="text-sm">
            Нет аккаунта?{" "}
            <Link className="text-destructive" href={"/registration"}>
              Зарегистрируйтесь
            </Link>
          </h4>
        </FormikForm>
      )}
    </Formik>
  );
};
