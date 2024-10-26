import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function EmployeesLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  const response = await fetch(`${API_URL}/employees/location/${store}`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:locations:employees"] },
  });
  const data = await response.json();
  return data.map((employee: Employee) => {
    const fullName = employee.employeeName + " " + employee.employeeLastName;
    return (
      <Card className="mx-10 my-10">
        <CardHeader>
          <p className="w-full">
            Nombre: <b>{fullName}</b>
          </p>
        </CardHeader>
        <Divider></Divider>
        <CardBody>
          <p className="w-full">
            Email: <b>{employee.employeeEmail}</b>
          </p>
          <p className="w-full">
            Teléfono: <b>{employee.employeePhoneNumber}</b>
          </p>
        </CardBody>
      </Card>
    );
  });
}
