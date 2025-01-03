import deleteProduct from "@/actions/products/delete";
import { Product } from "@/entities";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteProduct({ productId }: { productId: string }) {
  const deleteProductById = deleteProduct.bind(null, productId);
  return (
    <form className="flex w-full" action={deleteProductById}>
      <Button type="submit" color="danger">
        <LuTrash size="20"></LuTrash>
      </Button>
    </form>
  );
}
