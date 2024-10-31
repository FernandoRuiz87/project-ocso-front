import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

export default async function ManagerPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: [`dashboard:managers:${params.id}`, "dashboard:managers"] },
  });
  const data: Manager = await response.json();
  return (
    <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
      <ManagerCard manager={data}></ManagerCard>
      <div className="bg-white shadow-md rounded-md px-10 py-2 flex flex-row flex-grow-0 gap-2">
        <UpdateManager>
          <FormUpdateManager manager={data} />
        </UpdateManager>
        <DeleteManagerButton managerId={data.managerId}></DeleteManagerButton>
      </div>
    </div>
  );
}
