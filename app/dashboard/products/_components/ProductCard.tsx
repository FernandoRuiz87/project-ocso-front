import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hover:scale-110 max-w-[350px] mb-10">
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>{product.price}</b>
        </p>
        <p>
          Proveedor:{" "}
          <Link
            className="font-black underline"
            href={`/dashboard/providers/${product.provider.providerId}`}
          >
            {product.provider.providerName}
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
