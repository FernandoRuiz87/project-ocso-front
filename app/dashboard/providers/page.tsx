import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders, getUserRoles } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";

const ProviderPage = async () => {
  const role = getUserRoles();
  const response = await fetch(`${API_URL}/providers`, {
    headers: { ...authHeaders() },
    next: { tags: ["dashboard:providers"] },
  });
  const providers: Provider[] = await response.json();

  return (
    <div className="flex flex-grow-0 flex-col h-[90vh] items-end w-full pt-10 px-10">
      {!role.includes("Employee") && (
        <CreateProvider>
          <FormCreateProvider />
        </CreateProvider>
      )}
      <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14 ">
        {providers.map((provider: Provider) =>
          role.includes("Employee") ? (
            <ProviderCard provider={provider} key={provider.providerId} />
          ) : (
            <Link
              className="hover:scale-110 transition-transform"
              href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
              key={provider.providerId}
            >
              <ProviderCard provider={provider} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default ProviderPage;
