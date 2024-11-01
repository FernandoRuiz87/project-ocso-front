"use client";
import { Product } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

export default function FilteredCards({ products }: { products: Product[] }) {
  const [filtered, setFiltered] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (product.productName.toLowerCase().includes(filtered.toLowerCase())) {
        return true;
      } else return false;
    });
    setProductsList(filteredProducts);
  }, [filtered]);

  return (
    <>
      <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto h-full flex flex-col gap-8 border-r-orange-200 px-10 border-r-2 pt-10">
        <Input
          onChange={(e) => {
            setFiltered(e.target.value);
          }}
          label="Nombre del producto"
        />
        {productsList.map((product) => {
          return (
            <Link
              key={product.productId}
              href={{ pathname: `/dashboard/products/${product.productId}` }}
            >
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
