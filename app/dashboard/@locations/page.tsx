import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocations from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  let { data } = await axios.get(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  data = [
    {
      locationId: 0,
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "No existe",
    },
    ...data,
  ];
  return (
    <div className="w-8/12">
      <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
        <div className="w-1/2 my-10">
          <SelectLocations
            locations={data}
            store={searchParams?.store}
          ></SelectLocations>
        </div>
        <div className="w-8/12">
          <LocationCard store={searchParams.store}></LocationCard>
        </div>
        <FormNewLocation></FormNewLocation>
      </div>
    </div>
  );
};

export default LocationsPage;
