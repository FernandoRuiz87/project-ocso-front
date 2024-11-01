import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "../_components/ProviderCard";
import { Product, Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FormUpdateProvider from "./_components/FormUpdateProvider";

export default async function ProvidersPage({
  params,
}: {
  params: { id: string };
}) {
  const provider: Provider = await (
    await fetch(`${API_URL}/providers/${params.id}`, {
      method: "GET",
      headers: { ...authHeaders() },
      next: { tags: [`dashboard:providers:${params.id}`] },
    })
  ).json();
  return (
    <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
      <div className="flex flex-row items-center gap-6">
        <ProviderCard provider={provider} />
        <FormUpdateProvider provider={provider}></FormUpdateProvider>
      </div>
      <div className="h-1 bg-orange-900 w-[85vw]" />
      <div className="flex flex-wrap gap-10">
        {provider.products.map((product: Product) => (
          <Link
            key={product.productId}
            href={{ pathname: `/dashboard/products/${product.productId}` }}
            className="hover:scale-110 transition-all"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
