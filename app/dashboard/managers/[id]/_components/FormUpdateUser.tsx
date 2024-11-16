"use client";
import updateUser from "@/actions/users/update";
import { User } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormUpdateUser({ user }: { user: User }) {
  const { userId } = user;
  const [password, setPassword] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const updateUserById = updateUser.bind(null, userId);

  return (
    <form action={updateUserById} className="py-10 flex flex-col gap-2">
      <h1 className="text-white text-center text-xl">Actualizar usuario</h1>
      <Input
        name="userEmail"
        label="Correo de usuario"
        defaultValue={user.userEmail}
      />
      <Input
        type={visible ? "text" : "password"}
        value={password}
        name="userPassword"
        label="Contraseña"
        endContent={
          <button
            type="button"
            onMouseUp={() => {
              setVisible(false);
            }}
            onMouseDown={() => {
              setVisible(true);
            }}
          >
            <LuEye size={30} />
          </button>
        }
      />
      <Button
        color="danger"
        onPress={() => {
          setPassword(generate({ length: 10 }));
        }}
      >
        Generar Contraseña
      </Button>
      <Button type="submit" color="primary">
        Actualizar usuario
      </Button>
    </form>
  );
}
