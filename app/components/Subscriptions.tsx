import Image from "next/image";
import { Badge } from "@emryui/react-badge";
import { Dropdown } from "./Dropdown";
import Visa from "/public/payment-method-visa.svg";
import { ProductImage } from "./ProductImage";

type SubscriptionStatus =
  | "pending"
  | "draft"
  | "complete"
  | "paused"
  | "active"
  | "trial"
  | "pastdue"
  | "unpaid"
  | "canceled"
  | "paid";

interface SubscriptionsProps {
  status: SubscriptionStatus;
  product_name: string;
  product_image: string;
  price: {
    grand_total: number;
    discount_total: number;
    price_total: number;
    currency: string;
  };
  coupon_code?: string;
  product_discount_total: number;
  date_period_end: string;
  billing?: {
    exp_month?: string;
    exp_year?: string;
    card?: {
      last4: string;
    };
  };
  billing_schedule?: {
    interval: "monthly" | "daily" | "weekly" | "yearly";
    date_limit_end?: string;
  };
  items?: {}[];
}

export function Subscriptions(props: SubscriptionsProps) {
  const {
    status,
    product_name,
    product_image,
    product_discount_total,
    price: { grand_total, discount_total, price_total, currency },
    coupon_code,
    date_period_end,
    billing,
    billing_schedule,
  } = props;

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-md border border-gray-200">
      <div className="flex items-center p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <ProductImage
              product_image={product_image}
              product_name={product_name}
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-900">
                {product_name}
              </h4>
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

      <div className="flex p-4">
        <div className="h-full min-w-24 text-sm text-gray-400">Items</div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2.5">
            <Image
              src="https://shopau.coffeesupreme.com/cdn/shop/products/Coffee-Supreme_Five-Star-Day-Blend_Bag_Recyclable_1296x.png?v=1679021893"
              width={32}
              height={32}
              alt="Product name"
              className="rounded-md border border-gray-100 bg-gray-50"
            />
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-900">Five Star Day Blend</div>
              <div className="text-xs text-gray-500">(2)</div>
            </div>
          </li>
          <li className="flex items-center gap-2.5">
            <Image
              src="https://shopau.coffeesupreme.com/cdn/shop/products/Coffee-Supreme_Cappuccino-Hat_FRONT_540x.png?v=1671758437"
              width={32}
              height={32}
              alt="Product name"
              className="rounded-md border border-gray-100 bg-gray-50"
            />
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-900">Cappuccino dad cap</div>
              <div className="text-xs text-gray-500">(1)</div>
            </div>
          </li>
          <li className="flex items-center gap-2.5">
            <Image
              src="https://shopau.coffeesupreme.com/cdn/shop/files/Coffee-Supreme_Penco_Clippy_Brown_Front_540x.png?v=1699492454"
              width={32}
              height={32}
              alt="Product name"
              className="rounded-md border border-gray-100 bg-gray-50"
            />
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-900">Penco clip</div>
              <div className="text-xs text-gray-500">(1)</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
