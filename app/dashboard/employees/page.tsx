import { API_URL } from "@/constants";
import { Employee, Location } from "@/entities";
import { authHeaders, getUserRoles } from "@/helpers/authHeaders";
import CreateEmployee from "./_components/CreateEmployee";
import FormCreateEmployee from "./_components/FormCreateEmployee";
import ListEmployees from "./_components/ListEmployees";
import { LuPlus } from "react-icons/lu";

const EmployeesPage = async () => {
  const role = getUserRoles();

  if (role.includes("Employee"))
    return "No estas autorizado para ver esta página";

  const response = await fetch(`${API_URL}/employees`, {
    method: "GET",
    headers: { ...authHeaders() },
  });

  const employees: Employee[] = await response.json();

  const responseLocations = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: { ...authHeaders() },
  });

  const locations: Location[] = await responseLocations.json();

  return (
    <div className="flex flex-wrap flex-grow-0 h-[90vh] gap-4 overflow-y-auto p-10">
      <ListEmployees employees={employees} locations={locations} />
      <div className="absolute bottom-10 right-10">
        <CreateEmployee icon={<LuPlus size={20} />}>
          <FormCreateEmployee></FormCreateEmployee>
        </CreateEmployee>
      </div>
    </div>
  );
};

export default EmployeesPage;
