import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {
  const responseProviders = await fetch(`${API_URL}/providers`, {
    method: "GET",
    headers: { ...authHeaders() },
  });
  const providers = await responseProviders.json();
  return (
    <form
      className="px-10 justify-center pt-10 rounded-md"
      action={createProduct}
    >
      <div className="flex flex-col bg-orange-600 p-10 rounded-md gap-6">
        <h1 className="text-2xl font-bold text-white">Crear producto</h1>
        <Input label="Nombre" name="productName" />
        <Input
          label="Precio"
          endContent={<LuDollarSign size={20} />}
          name="price"
        />
        <Input label="Número de sellos" name="countSeal" />
        <SelectProvider providers={providers}></SelectProvider>
        <Button color="primary" type="submit">
          Crear producto
        </Button>
      </div>
    </form>
  );
};

export default ProductsPage;
