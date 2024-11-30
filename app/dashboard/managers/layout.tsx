import { ReactNode } from "react";
import ManagerCards from "./_components/ManagerCards";
import { getUserRoles } from "@/helpers/authHeaders";

export default function LayoutManagers({
  children,
  count,
}: {
  children: ReactNode;
  count: ReactNode;
}) {
  const role = getUserRoles();

  if (!role.includes("Admin"))
    return "No estas autorizado para ver esta página";
  return (
    <>
      <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
        <ManagerCards></ManagerCards>
      </div>
      <div className="w-7/12 flex flex-col items-center gap-10">
        <div>{children}</div>
        <div>{count}</div>
      </div>
    </>
  );
}
