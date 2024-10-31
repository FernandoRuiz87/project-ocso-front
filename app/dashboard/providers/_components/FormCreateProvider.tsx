import { Button, Input } from "@nextui-org/react";
import createProvider from "@/actions/providers/create";

export default async function FormCreateProvider() {
  return (
    <form
      action={createProvider}
      className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2"
    >
      <h1 className="text-2xl text-white font-semibold  text-center">
        Crear manager
      </h1>
      <Input
        required={true}
        isRequired
        label="Nombre del provedor"
        placeholder="Coca-cola"
        name="providerName"
      />
      <Input
        required={true}
        isRequired
        label="Correo electrónico del provedor"
        placeholder="Coca-Cola@bussiness.com"
        name="providerEmail"
        type="email"
      />
      <Input
        required={true}
        isRequired
        label="Número de teléfono del provedor"
        placeholder="442 123 4567"
        name="providerPhoneNumber"
      />
      <Button color="primary" type="submit">
        Crear
      </Button>
    </form>
  );
}
