import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (store) return null;
  const token = cookies().get(TOKEN_NAME)?.value;
  const responseManagers = await axios.get(`${API_URL}/managers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const responseLocations = await axios.get(`${API_URL}/locations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return (
    <form
      action={createLocation}
      className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-l"
    >
      <h1 className="text-3xl text-white">Crear tienda</h1>
      <Input
        label="Nombre"
        placeholder="Ocso Jurikiya"
        name="locationName"
      ></Input>
      <Input
        label="Dirección"
        placeholder="Av De la Luz S/N"
        name="locationAddress"
      ></Input>
      <Input label="Latitud" placeholder="-120" name="locationLat"></Input>
      <Input label="Longitud" placeholder="20" name="locationLng"></Input>
      <SelectManager
        managers={responseManagers.data}
        locations={responseLocations.data}
      ></SelectManager>
      <Button type="submit" color="primary">
        Subir
      </Button>
    </form>
  );
}
