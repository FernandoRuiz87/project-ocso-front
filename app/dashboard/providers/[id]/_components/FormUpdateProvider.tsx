import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProviderButton from "./DeleteButton";
import DeleteProvider from "./DeleteProvider";

export default function FormUpdateProvider({
  provider,
}: {
  provider: Provider;
}) {
  const { providerId } = provider;
  const updateProviderWithId = updateProvider.bind(null, providerId);
  return (
    <>
      <form
        action={updateProviderWithId}
        className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-10 items-center justify-center"
      >
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerName}
          required={true}
          isRequired
          label="Nombre del provedor"
          placeholder="Coca-cola"
          name="providerName"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerEmail}
          required={true}
          isRequired
          label="Correo electrónico del provedor"
          placeholder="Coca-Cola@bussiness.com"
          name="providerEmail"
          type="email"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerPhoneNumber}
          required={true}
          isRequired
          label="Número de teléfono del provedor"
          placeholder="442 123 4567"
          name="providerPhoneNumber"
        />
        <Button color="primary" type="submit">
          Actualizar
        </Button>
        <DeleteProvider>
          <h1 className="text-white text-4xl text-center">
            ¿Estás seguro de eliminar al proveedor{" "}
            <b>{provider.providerName}</b>?
          </h1>
          <DeleteProviderButton providerId={providerId} />
        </DeleteProvider>
      </form>
    </>
  );
}
