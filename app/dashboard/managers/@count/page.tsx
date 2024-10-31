import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card } from "@nextui-org/react";

export default async function CountManagersPage() {
  const response = await fetch(`${API_URL}/managers`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:managers"] },
  });

  const managers = await response.json();
  const countNotStore = managers.filter(
    (manager: Manager) => !manager.location
  ).length;
  let max: number = 0;
  let salary = 0;
  managers.forEach((manager: Manager) => {
    if (manager.managerSalary > max) max = manager.managerSalary;
    salary += manager.managerSalary;
  });

  return (
    <Card className="w-fit px-2 py-4 text-center">
      <h1>
        Hay {managers.length} manager{managers.length > 1 ? "s" : ""}
      </h1>
      <h1>Hay {countNotStore} sin tienda</h1>
      <h1>El salario maximo es {max}</h1>
      <h1>El salario promedio es {(salary / managers.length).toFixed(2)}</h1>
    </Card>
  );
}
