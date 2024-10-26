import { API_URL } from "@/constants";
import SelectLocations from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
import UpdateLocation from "./_components/UpdateLocation";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const response = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:locations"] },
  });
  let data: Location[] = await response.json();
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
        <div className="w-6/12">
          <FormNewLocation store={searchParams.store}></FormNewLocation>
        </div>
        <div className="flex flex-row flex-grow-0 gap-10 items-center">
          <DeleteLocationButton
            store={searchParams.store}
          ></DeleteLocationButton>
          <UpdateLocation store={searchParams.store}>
            <FormUpdateLocation store={searchParams.store}></FormUpdateLocation>
          </UpdateLocation>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
