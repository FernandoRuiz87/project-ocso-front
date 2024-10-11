import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <p className=" text-2xl my-4 text-white">
        Registrarse en <span></span>
      </p>
      <div className=" flex flex-col gap-2 my-4 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm"></Input>
        <Input
          label="Contraseña"
          type="password"
          isRequired={true}
          size="sm"
        ></Input>
        <Input
          label="Repetir contraseña"
          type="password"
          isRequired={true}
          size="sm"
        ></Input>
      </div>
      <div className="text-white flex flex-col items-center gap-2">
        <Button color="primary">Registrarse</Button>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link href={"/login"} className="text-red-600 underline">
            Inicia sesion
          </Link>
        </p>
      </div>
    </div>
  );
}
