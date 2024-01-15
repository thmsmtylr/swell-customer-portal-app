"use client";
import { Root, List, Content, Trigger } from "@radix-ui/react-tabs";
import { Subscriptions } from "./Subscriptions";

interface TabsProps {
  subscriptions: [any];
}

const excludedStatuses = ["draft"];

export function Tabs(props: TabsProps) {
  const { subscriptions } = props;
  return (
    <Root defaultValue="subscriptions" className="flex flex-grow-0 flex-col">
      <List className="mx-auto mb-6 flex items-center justify-evenly gap-2 rounded-lg border border-gray-100 bg-gray-50 p-1">
        <Trigger
          value="subscriptions"
          className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
        >
          Subscriptions
        </Trigger>
        <Trigger
          value="payment-methods"
          className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
        >
          Payment methods
        </Trigger>
        <Trigger
          value="billing"
          className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
        >
          Billing
        </Trigger>
        <Trigger
          value="addresses"
          className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow-sm"
        >
          Addresses
        </Trigger>
      </List>
      <Content value="subscriptions" className="mx-12">
        <h3 className="mb-6 text-2xl font-medium text-gray-900">
          Subscriptions
        </h3>
        <div className="mb-12 flex flex-col gap-6">
          {subscriptions?.length > 0 &&
            subscriptions
              .filter(
                (subscription) =>
                  !excludedStatuses.includes(subscription.status),
              )
              .map((subscription) => {
                return (
                  <Subscriptions
                    key={subscription.id}
                    status={subscription.status}
                    product_name={subscription.product.name}
                    product_image={subscription.product.images[0].file.url}
                    price={{
                      grand_total: subscription.grand_total,
                      discount_total: subscription.discount_total,
                      price_total: subscription.price_total,
                      currency: subscription.currency,
                    }}
                    coupon_code={subscription.coupon_code}
                    product_discount_total={subscription.product_discount_total}
                    date_period_end={subscription.date_period_end}
                    billing={subscription.billing}
                    billing_schedule={subscription.billing_schedule}
                  />
                );
              })}
          {/* <Subscriptions
            status="active"
            plan_name="Holiday Espresso Blend"
            product_image="https://shopau.coffeesupreme.com/cdn/shop/files/Coffee-Supreme_Holiday-Blend_Roasted-Fresh-Daily_250g_540x.png?v=1698626759"
            price="$19.99"
            billing_schedule={{ interval: "monthly" }}
            billing={{ last4: "4242" }}
          />
          <Subscriptions
            status="paused"
            plan_name="Filter Subscription"
            product_image="https://shopau.coffeesupreme.com/cdn/shop/files/CoffeeSupremeBoxerBagRecyclableAU_1296x.png?v=1686703782"
            price="$31.00"
            billing_schedule={{ interval: "weekly" }}
            billing={{ last4: "4242" }}
          /> */}
        </div>
      </Content>
      <Content value="payment-methods"></Content>
      <Content value="addresses"></Content>
    </Root>
  );
}
