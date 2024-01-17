"use client";
import { Root, List, Content, Trigger } from "@radix-ui/react-tabs";
import { Subscription } from "./Subscription";
import { Select } from "./Select";
import { Subscription as SubscriptionType } from "@/types/subscription";

interface TabsProps {
  subscriptions: [SubscriptionType];
  product: {};
}

const excludedStatuses = ["draft"];

export function Tabs(props: TabsProps) {
  const { subscriptions, product } = props;
  return (
    <Root defaultValue="subscriptions" className="flex flex-grow-0 flex-col">
      <List className="mx-auto mb-8 flex items-center justify-evenly gap-2 rounded-lg border border-gray-100 bg-gray-50 p-1">
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
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-900">Subscriptions</h3>
          <Select trigger_name="Select a status" />
        </div>
        <div className="mb-12 flex flex-col gap-6">
          {subscriptions?.length > 0 &&
            subscriptions
              .filter(
                (subscription) =>
                  !excludedStatuses.includes(subscription.status),
              )
              .map((subscription) => {
                return (
                  <Subscription
                    key={subscription.id}
                    subscription={subscription}
                    product={product}
                  />
                );
              })}
        </div>
      </Content>
      <Content value="payment-methods"></Content>
      <Content value="addresses"></Content>
    </Root>
  );
}
