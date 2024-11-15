import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";

export default async function EmployeesPage({
  params,
}: {
  params: { id: string };
}) {
  const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
    method: "GET",
    headers: { ...authHeaders() },
  });

  const employee: Employee = await responseEmployee.json();
  return (
    <div className="w-full h-[90vh] flex flex-grow items-center justify-center">
      <EmployeeDataCard employee={employee} />
      <FormUpdateEmployee employee={employee} />
    </div>
  );
}
