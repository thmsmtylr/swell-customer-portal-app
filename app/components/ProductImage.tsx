import Image from "next/image";

export function ProductImage({
  product_image,
  product_name,
}: {
  product_image: string;
  product_name: string;
}) {
  return (
    <div className="relative h-12 w-12">
      {product_image ? (
        <Image
          fill
          src={product_image}
          alt={product_name}
          className="rounded-md border border-gray-100 bg-gray-50"
        />
      ) : (
        <div
          className="h-12 w-12 rounded-md border border-gray-100 bg-gray-50"
          aria-label={`${product_name ? `${product_name} image placeholder` : "image placeholder"}`}
        />
      )}
    </div>
  );
}
