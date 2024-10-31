import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Manager } from "@/entities";
import Link from "next/link";

export default function ManagerCard({ manager }: { manager: Manager }) {
  return (
    <Card className="mx-20 py-2 text-center">
      <CardHeader>
        <p className="w-full">
          <b className="text-4xl">{manager.managerFullName}</b>
        </p>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
        <div className="flex flex-col text-large">
          <p className="w-full">
            Email: <b>{manager.managerEmail}</b>
          </p>
          <p className="w-full">
            Teléfono: <b>{manager.managerPhoneNumber}</b>
          </p>
          <p className="w-full">
            Salario: <b>{manager.managerSalary}</b>
          </p>
          <p className={manager.location ? "" : "hidden"}>
            Tienda:{" "}
            <Link
              href={{
                pathname: `/dashboard`,
                query: { store: manager?.location?.locationId },
              }}
            >
              <b className="underline">{manager?.location?.locationName}</b>
            </Link>
          </p>
        </div>
        {manager.location ? (
          <iframe
            className="border-2 border-orange-800 rounded-md my-2"
            width="300"
            height="200"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY_MAPS}&q=${manager.location.locationLatLng[0]},${manager.location.locationLatLng[1]}`}
          ></iframe>
        ) : (
          <p className="w-full text-4xl">No tiene tienda</p>
        )}
      </CardBody>
    </Card>
  );
}
