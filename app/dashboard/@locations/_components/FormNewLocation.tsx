import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation() {
  const token = cookies().get(TOKEN_NAME)?.value;
  const responseManagers = await axios.get(`${API_URL}/managers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const responseLocations = await axios.get(`${API_URL}/locations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return (
    <form action={createLocation}>
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
      <button>Subir</button>
    </form>
  );
}
