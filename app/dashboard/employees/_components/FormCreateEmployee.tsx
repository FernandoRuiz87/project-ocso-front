import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "./SelectLocation";

export default async function FormCreateEmployee() {
  const response = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
  });
  const locations = await response.json();
  return (
    <form
      action={createEmployee}
      className="flex flex-col gap-2 p-8 bg-orange-600 h-fit rounded-md m-2"
    >
      <Input
        isRequired={true}
        label="Nombre"
        name="employeeName"
        placeholder="Marco"
      />
      <Input
        isRequired={true}
        label="Apellidos"
        name="employeeLastName"
        placeholder="Aurelio"
      />
      <Input
        isRequired={true}
        label="Correo electrónico"
        name="employeeEmail"
        placeholder="marco@example.com"
      />
      <Input
        isRequired={true}
        label="Num. de teléfono"
        name="employeePhoneNumber"
        placeholder="444XXXXXXX"
      />
      <Input name="employeePhoto" type="file" />
      <SelectLocation stores={locations} />
      <Button type="submit" color="primary">
        Crear empleado
      </Button>
    </form>
  );
}
