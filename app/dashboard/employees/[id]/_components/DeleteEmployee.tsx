import deleteEmployee from "@/actions/employees/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteEmployee({ employeeId }: { employeeId: string }) {
  const deleteEmployeeById = deleteEmployee.bind(null, employeeId);
  return (
    <form action={deleteEmployeeById}>
      <Button color="danger" type="submit">
        <LuTrash size={20} />
      </Button>
    </form>
  );
}
