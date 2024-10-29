import deleteManager from "@/actions/managers/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteManagerButton({
  managerId,
}: {
  managerId: string;
}) {
  const deleteByManagerId = deleteManager.bind(null, managerId);
  return (
    <form action={deleteByManagerId}>
      <Button color="danger" type="submit">
        <LuTrash size={20} />
      </Button>
    </form>
  );
}
