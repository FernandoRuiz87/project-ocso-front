import axios from "axios";

const CountPage = async () => {
  const countLocations = await axios.get("http://localhost:4000/locations");
  return "Hay tantas locations: " + countLocations?.data?.length;
};

export default CountPage;
