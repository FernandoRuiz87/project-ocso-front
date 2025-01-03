import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "../../_components/SelectLocation";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateEmployee({
  employee,
}: {
  employee: Employee;
}) {
  const response = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
  });
  const locations = await response.json();
  const { employeeId } = employee;
  const updateEmployeeById = updateEmployee.bind(null, employeeId);
  return (
    <form
      action={updateEmployeeById}
      className="flex flex-col gap-2 p-8 bg-orange-600 h-fit rounded-md m-2"
    >
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
      <SelectLocation stores={locations} />
      <Button type="submit" color="primary">
        Actualizar datos
      </Button>
    </form>
  );
}
