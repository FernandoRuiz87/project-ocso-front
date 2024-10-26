import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store || store == undefined) return null;
  const responseManagers = await fetch(`${API_URL}/managers`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:managers"] },
  });
  const dataManagers: Manager[] = await responseManagers.json();
  const responseLocations = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:locations"] },
  });

  const dataLocations: Location[] = await responseLocations.json();
  let foundLocation = dataLocations.find(
    (location) => location.locationId === +store
  );
  let foundManager = dataManagers.find((manager) => {
    manager.managerId === foundLocation?.manager?.managerId;
  });

  return (
    <form
      action={createLocation}
      className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-l"
    >
      <h1 className="text-3xl text-white">Crear tienda</h1>
      <Input
        defaultValue={foundLocation?.locationName}
        label="Nombre"
        placeholder="Ocso Jurikiya"
        name="locationName"
      ></Input>
      <Input
        defaultValue={foundLocation?.locationAddress}
        label="Dirección"
        placeholder="Av De la Luz S/N"
        name="locationAddress"
      ></Input>
      <Input
        defaultValue={foundLocation?.locationLatLng[0].toString()}
        label="Latitud"
        placeholder="-120"
        name="locationLat"
      ></Input>
      <Input
        defaultValue={foundLocation?.locationLatLng[1].toString()}
        label="Longitud"
        placeholder="20"
        name="locationLng"
      ></Input>
      <SelectManager
        defaultManager={foundManager?.managerId}
        managers={dataManagers}
        locations={dataLocations}
      ></SelectManager>
      <Button type="submit" color="primary">
        Subir
      </Button>
    </form>
  );
}
