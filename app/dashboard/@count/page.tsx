import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

const CountPage = async () => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const countLocations = await axios.get("http://127.0.0.1:4000/locations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const cantidad = countLocations?.data?.length;
  return (
    <div className="w-2/12">{`Hay ${cantidad} tienda ${
      cantidad > 1 ? "s" : ""
    } `}</div>
  );
};

export default CountPage;
