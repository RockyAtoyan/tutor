import { Form } from "@/app/(browse)/(auth)/registration/_components/Form";

const LoginPage = () => {
  return (
    <div className="page h-screen flex items-center justify-center">
      <div className="w-full lg:w-[40%] mx-auto bg-secondary p-5 rounded-2xl">
        <h1 className="text-center">Регистрация</h1>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
