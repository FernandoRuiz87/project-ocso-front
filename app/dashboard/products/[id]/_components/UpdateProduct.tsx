import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({
  product,
  providers,
}: {
  product: Product;
  providers: Provider[];
}) {
  const { productId } = product;
  const updateProductById = updateProduct.bind(null, productId);
  return (
    <form action={updateProductById} className="p-10 flex flex-col gap-2">
      <Input
        defaultValue={product.productName}
        label="Nombre"
        name="productName"
      />
      <Input defaultValue={String(product.price)} label="Precio" name="price" />
      <Input
        defaultValue={String(product.countSeal)}
        label="Número de sellos"
        name="countSeal"
      />
      <SelectProvider
        providers={providers}
        defaultProvider={product.provider.providerId}
      ></SelectProvider>
      <div className="flex flex-row gap-10 flex-grow-0">
        <Button color="primary" type="submit">
          <LuCheck size="20"></LuCheck>
        </Button>
      </div>
    </form>
  );
}
