import Image from "next/image";
import { Badge } from "@emryui/react-badge";
import { Dropdown } from "./Dropdown";
import { ProductImage } from "./ProductImage";
import { SubscriptionProps } from "@/types/subscription";
import Visa from "/public/payment-method-visa.svg";

export function Subscription(props: SubscriptionProps) {
  const {
    subscription: {
      status,
      product: { name, images },
      discount_total,
      grand_total,
      currency,
      coupon_code,
      date_period_end,
      billing,
      billing_schedule,
    },
    product,
  } = props;

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-md border border-gray-200">
      <div className="flex items-center p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <ProductImage
              product_image={images[0].file.url}
              product_name={name}
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-900">{name}</h4>
              <p className="flex items-center gap-2 text-sm font-light text-gray-500">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency,
                }).format(grand_total)}{" "}
                billed {billing_schedule && billing_schedule.interval}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              size="md"
              variant={
                status === "active"
                  ? "success"
                  : status === "paused"
                    ? "warning"
                    : status === "canceled"
                      ? "gray"
                      : "error"
              }
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            <Dropdown />
          </div>
        </div>
      </div>
      {discount_total > 0 && (
        <div className="flex items-center p-4">
          <div className="min-w-24 text-sm text-gray-400">Discounts</div>
          <div className="text-sm text-gray-500">
            <Badge addClassNames="uppercase">{coupon_code}</Badge> / (-
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: currency,
            }).format(discount_total)}
            )
          </div>
        </div>
      )}
      <div className="flex items-center p-4">
        <div className="min-w-24 text-sm text-gray-400">Renews</div>
        <div className="text-sm text-gray-900">
          Next invoice due{" "}
          {new Date(date_period_end).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
      {billing && billing.card && (
        <div className="flex items-center p-4">
          <div className="min-w-24 text-sm text-gray-400">Payment</div>
          <div className="flex items-center gap-4">
            <Visa />
            <div className="text-sm text-gray-900">
              Visa ending in{" "}
              <span className="font-medium">{billing.card.last4}</span>
            </div>
          </div>
        </div>
      )}
      {product && product?.bundle_items?.length > 0 && (
        <div className="flex p-4">
          <div className="h-full min-w-24 text-sm text-gray-400">Items</div>
          <ul className="flex flex-col gap-2">
            {product.bundle_items.map((item: any) => (
              <li key={item.id} className="flex items-center gap-2.5">
                <Image
                  src={item.product.images[0].file.url}
                  width={32}
                  height={32}
                  alt="Product name"
                  className="rounded-md border border-gray-100 bg-gray-50"
                />
                <div className="flex items-center gap-2">
                  <div className="text-xs text-gray-900">
                    {item.product.name}
                  </div>
                  <div className="text-xs text-gray-500">({item.quantity})</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
