import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const response = await fetch(`${API_URL}/locations/${store}`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboards:locations", `dashboard:locations:${store}`] },
  });
  const data: Location = await response.json();
  return (
    <Card>
      <CardHeader>
        <b className="w-full text-2xl">{data.locationName}</b>
      </CardHeader>
      <Divider></Divider>
      <CardBody className="flex flex-col w-full items-center">
        <p className="w-full">
          Manager:{" "}
          <Link
            href={{ pathname: `dashboard/managers/${data.manager?.managerId}` }}
          >
            <b> {data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
          Direccion: <b>{data.locationAddress}</b>
        </p>
        <iframe
          className="border-2 border-orange-800 rounded-md my-2"
          width="300"
          height="200"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBdX7XWCoFOxP8N1z-nTEGz4v4mvrPvvFQ
            &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}
        ></iframe>
      </CardBody>
    </Card>
  );
}
