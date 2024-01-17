import { useField } from "formik";
import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {}

const FormikInput: FC<any> = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  const [mode, setMode] = useState(true);

  return (
    <div className="relative w-[80%]">
      <Input
        {...field}
        {...props}
        type={
          props.type === "password" ? (mode ? "password" : "text") : props.type
        }
        className={cn("w-full", props.type === "password" && "pr-[40px]")}
      />
      {props.type === "password" && (
        <Button
          type={"button"}
          className="absolute top-[50%] -translate-y-1/2 right-[2px]"
          size="icon"
          variant="link"
          onClick={() => {
            setMode((prev) => !prev);
          }}
        >
          {mode ? <Eye /> : <EyeOff />}
        </Button>
      )}
    </div>
  );
};

export default FormikInput;
