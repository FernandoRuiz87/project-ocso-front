import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateEmployee({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <form className="flex flex-col gap-2 p-8 bg-orange-600 h-fit rounded-md m-2">
      <Input
        label="Nombre"
        name="employeeName"
        defaultValue={employee.employeeName}
      />
      <Input
        label="Apellidos"
        name="employeeLastName"
        defaultValue={employee.employeeLastName}
      />
      <Input
        label="Correo electrónico"
        name="employeeEmail"
        defaultValue={employee.employeeEmail}
      />
      <Input
        label="Num. de teléfono"
        name="employeePhoneNumber"
        defaultValue={employee.employeePhoneNumber}
      />
      <Input
        name="employeePhoto"
        type="file"
        defaultValue={employee.employeePhoto}
      />
      <Button type="submit" color="primary">
        Actualizar datos
      </Button>
    </form>
  );
}
