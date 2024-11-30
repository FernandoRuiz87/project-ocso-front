import { Provider } from "@/entities";
import { getUserRoles } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
  const role = getUserRoles();
  return (
    <Card className="w-full min-w-[350px] max-w-[350px]">
      <CardHeader>
        <b>{provider.providerName}</b>
      </CardHeader>
      <Divider />
      <CardBody>
        {!role.includes("Employee") && (
          <>
            <p>Correo electrónico:</p>
            <b>{provider.providerEmail}</b>
            <p>Número de teléfono:</p>
            <b>{provider.providerPhoneNumber}</b>
          </>
        )}

        {provider?.products?.length !== 0 ? (
          <p>
            Tiene <b>{provider?.products?.length}</b> producto
            {provider.products.length > 1 ? "s" : ""}
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}
