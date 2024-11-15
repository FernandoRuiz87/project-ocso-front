"use client";
import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserEmployee({
  employee,
}: {
  employee: Employee;
}) {
  const [password, setPassword] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const { employeeId } = employee;
  const registerEmployeeById = registerEmployee.bind(null, employeeId);
  return (
    <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
      <h1 className="text-white text-center text-xl">Crear usuario</h1>
      <Input name="userEmail" label="Correo de usuario" />
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
      <Button type="submit">Crear usuario</Button>
    </form>
  );
}
